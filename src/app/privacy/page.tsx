
export default function Privacy() {
    return (
        <main className="min-h-screen bg-[#0D0D0D] text-white selection:bg-primary selection:text-black py-24 px-4">
            <div className="max-w-3xl mx-auto prose prose-invert">
                <h1>Privacy Policy</h1>
                <p>Last updated: {new Date().toLocaleDateString()}</p>

                <p>Your privacy is important to us. This policy explains how we handle your data.</p>

                <h2>1. Information We Collect</h2>
                <p>We collect information you provide directly to us, such as when you create an account or contact us.</p>

                <h2>2. How We Use Information</h2>
                <p>We use your information to provide, maintain, and improve our services.</p>

                <h2>3. Contact</h2>
                <p>Questions? Contact us at support@macrolens.tech</p>
            </div>
        </main>
    );
}
