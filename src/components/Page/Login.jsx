import FormLogin from "../Fragments/FormLogin";
import AuthLayout from "../Layout/LayoutFormLR";

const LoginPage=()=> {
    return (
        <AuthLayout title="Login" type="login">
            <FormLogin/>
        </AuthLayout>
    )
}

export default LoginPage;