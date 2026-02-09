
export default function Terms() {
    return (
        <main className="min-h-screen bg-[#0D0D0D] text-white selection:bg-primary selection:text-black py-24 px-4">
            <div className="max-w-3xl mx-auto prose prose-invert">
                <h1>Terms of Service</h1>
                <p>Last updated: {new Date().toLocaleDateString()}</p>

                <p>Welcome to MacroLens. By using our app, you agree to these terms.</p>

                <h2>1. Usage</h2>
                <p>MacroLens is a tool for nutritional analysis. The information provided is for educational purposes only and not medical advice.</p>

                <h2>2. Data Privacy</h2>
                <p>We respect your privacy. Please check our Privacy Policy for details.</p>

                <h2>3. Contact</h2>
                <p>Questions? Contact us at support@macrolens.tech</p>
            </div>
        </main>
    );
}
