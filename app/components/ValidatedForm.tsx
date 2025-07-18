import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { useTranslations } from 'next-intl';

export default function ValidatedForm({ closeForm, interest }: { closeForm: () => void; interest?: string }) {
    const t = useTranslations('ModalForm');
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState({ name: "", email: "" });

    const validate = () => {
        const newErrors = { name: "", email: "" };
        let isValid = true;

        if (name.trim() === "") {
            newErrors.name = t("nameRequired");
            isValid = false;
        }

        // ✅ Correct email regex (basic but effective)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.trim() === "") {
            newErrors.email = t("emailRequired");
            isValid = false;
        } else if (!emailRegex.test(email)) {
            newErrors.email = t("emailInvalid");
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (validate()) {
            try {
                await fetch("/api/subscribe", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name: name.trim(),
                        email: email.trim(),
                        interest: interest || "General",
                    }),
                });
                toast.success(t("successMessage"));
                closeForm();
            } catch {
                toast.error(t("errorMessage"));
            }

        }
    };

    return (
        <form
            method="post"
            target="_blank" onSubmit={handleSubmit} className="space-y-4 mb-6">
            <div>
                <label htmlFor="mce-FNAME" className="block text-sm font-medium">
                    {t('name')}
                </label>
                <input
                    type="text"
                    name="FNAME"
                    id="mce-FNAME"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border border-gray-300 px-4 py-2 rounded"
                />
                {errors.name && (
                    <p className="text-red-600 text-sm mt-1">{errors.name}</p>
                )}
            </div>

            <div>
                <label htmlFor="mce-EMAIL" className="block text-sm font-medium">
                    {t('email')} <span className="text-red-600">*</span>
                </label>
                <input
                    type="email"
                    name="EMAIL"
                    id="mce-EMAIL"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border border-gray-300 px-4 py-2 rounded"
                />
                {errors.email && (
                    <p className="text-red-600 text-sm mt-1">{errors.email}</p>
                )}
            </div>

            {/* Honeypot field to prevent bot signups */}
            <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
                <input
                    type="text"
                    name="b_d1c54e136b242f2abf10e1856_dca71f818e"
                    tabIndex={-1}
                    defaultValue=""
                />
            </div>

            <button
                type="submit"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="bg-main-green-100 hover:bg-main-green-200 text-white px-6 py-2 rounded font-semibold w-full"
            >
                {t('submit')}
            </button>
        </form>
    );
}