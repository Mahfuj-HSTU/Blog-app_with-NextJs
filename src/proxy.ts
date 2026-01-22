import { NextRequest, NextResponse } from 'next/server'
import { userService } from './services/user.service'
import { ROLES } from './constant/roles'

export async function proxy(request: NextRequest) {
	// console.log('hellwo', request.url)  //* matcher e j path thakbe se path e trigger hole proxy function call hobe

	const pathname = request.nextUrl.pathname
	let isAuthenticated = false
	let isAdmin = false

	const { data } = await userService.getSession()

	if (data) {
		isAuthenticated = true
		isAdmin = data.user.role === ROLES.ADMIN
	}

	if (!isAuthenticated) {
		return NextResponse.redirect(new URL('/login', request.url))
	}

	// * admin can't visit /dashboard or user dashboard
	if (isAdmin && pathname.startsWith('/dashboard')) {
		return NextResponse.redirect(new URL('/admin-dashboard', request.url))
	}

	// * user can't visit /admin-dashboard
	if (!isAdmin && pathname.startsWith('/admin-dashboard')) {
		return NextResponse.redirect(new URL('/dashboard', request.url))
	}

	return NextResponse.next()
}

export const config = {
	matcher: [
		'/dashboard',
		'/dashboard/:path*',
		'/admin-dashboard',
		'/admin-dashboard/:path*'
	]
}
