import { RegisterForm } from "@/components/modules/authentication/register-form"

export default function Page() {
  return (
    <div className="flex h-[calc(100vh-5rem)] w-full items-center justify-center">
      <div className="w-full max-w-sm">
        <RegisterForm />
      </div>
    </div>
  )
}
