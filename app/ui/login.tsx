
type LoginPageProps = {
    displayDialog: React.Dispatch<React.SetStateAction<any>>;
};

export default function LoginPage({ displayDialog }: LoginPageProps) {
    return (
        <div className="h-screen flex-1 flex-col flex items-center justify-center p-20">
            <p className="pt-20 px-20 text-2xl text-center">Thank you for applying to our early access program. The program is currently limited to <a href="x.com">X Premium+</a> subscribers.</p>
            <p className="text-l text-white text-center">
                <a className="cursor-pointer">Go back to X</a> | <a onClick={() => displayDialog(true)} className="cursor-pointer">Profile settings</a> </p>
        </div>
    );
}