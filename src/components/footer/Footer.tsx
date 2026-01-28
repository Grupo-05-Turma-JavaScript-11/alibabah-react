import { GithubLogoIcon } from "@phosphor-icons/react"

function Footer() {
    return (
        <footer className="w-full bg-marrom text-offwhite py-6 mt-10">
            <div className="max-w-7xl mx-auto flex flex-col items-center gap-2 text-sm">
                <p className="text-dourado font-semibold text-xl">
                    Alibabah Delivery | Culinária Árabe
                </p>

                <p> Comida árabe fresca, natural e feita para o dia a dia. </p>

                <p className="text-sm">Acesse nosso GitHub</p>

                <div className="flex gap-2">
                    <a
                        href="https://github.com/Grupo-05-Turma-JavaScript-11/alibabah-react.git"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:opacity-80 transition-opacity"
                        aria-label="GitHub"
                    >
                        <GithubLogoIcon size={48} weight="bold" />
                    </a>
                </div>

                <p className="text-xs opacity-70">
                    © 2026 Alibabah. Todos os direitos reservados.
                </p>

            </div>
        </footer>
    )
}

export default Footer
