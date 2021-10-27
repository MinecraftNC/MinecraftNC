import { AuthenticationError, Link, useMutation, Routes } from "blitz"
import { LabeledTextField } from "app/core/components/LabeledTextField"
import { Form, FORM_ERROR } from "app/core/components/Form"
import login from "app/auth/mutations/login"
import { Login } from "app/auth/validations"

type LoginFormProps = {
  onSuccess?: () => void
}

export const LoginForm = (props: LoginFormProps) => {
  const [loginMutation] = useMutation(login)

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-200">
      <Form
        submitText="Login"
        schema={Login}
        className="flex flex-col bg-white rounded shadow-lg p-12 mt-12 dark:bg-gray-700"
        initialValues={{ email: "", password: "" }}
        onSubmit={async (values) => {
          try {
            await loginMutation(values)
            props.onSuccess?.()
          } catch (error: any) {
            if (error instanceof AuthenticationError) {
              return { [FORM_ERROR]: "Sorry, those credentials are invalid" }
            } else {
              return {
                [FORM_ERROR]:
                  "Sorry, we had an unexpected error. Please try again. - " + error.toString(),
              }
            }
          }
        }}
      >
        <h1 className="text-center mb-3"></h1>
        <LabeledTextField name="email" label="Email" placeholder="Email" />
        <LabeledTextField name="password" label="Password" placeholder="Password" type="password" />
        <div className="flex mt-6 justify-center text-xs">
          <a className="text-blue-400 hover:text-blue-500">
            <Link href={Routes.ForgotPasswordPage()}>Forgot Password</Link>
          </a>
        </div>
      </Form>
    </div>
  )
}

export default LoginForm
