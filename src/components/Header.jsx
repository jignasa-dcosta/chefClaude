import chefClaudeLogo from "/Portfolio/03_React_projects/03_Chef-Claude/chefClaude/src/assets/images/Chef Claude Icon.png"

export default function Header() {
    return (
        <>
        <header>
                <img src={chefClaudeLogo} alt="Chef Claude Logo" className="chef-claude-logo"/>
                <h1 className="logo-title">Chef Claude</h1>
        </header>
        </>
    )
}