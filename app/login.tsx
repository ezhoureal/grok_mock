
type LoginPageProps = {
    openDialog: React.Dispatch<React.SetStateAction<any>>;
};

export default function LoginPage({ openDialog }: LoginPageProps) {
    return (
        <div className="h-screen flex-1 flex-col flex items-center justify-center p-20">
            <p className="pt-20 px-20 text-2xl text-center">Thank you for applying to our early access program. The program is currently limited to <a href="x.com">X Premium+</a> subscribers.</p>
            <p className="text-l text-center">
                <a>Go back to X</a> | <a onClick={() => openDialog(true)}>Profile settings</a> </p>
        </div>
    );
}