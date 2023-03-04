import * as C from './Appstyles';
import Logo from './assets/Logo.svg';
import Twitter from './assets/Twitter.png';
import Discord from './assets/Discord.png';
import Youtube from './assets/Youtube.png';
import Teamspeak from './assets/Teamspeak.png';

const App = () => {
    return (
        <C.Container>
            <C.Header>
                <img id="Logo" src={Logo} alt="" />
                <nav>
                    <ul>
                        <li>
                            Jogar
                        </li>
                        <li>
                            Fórum
                        </li>
                        <li>
                            Sobre
                        </li>      
                        <li>
                            Vip
                        </li> 
                        <li>
                            BLABLABLA
                        </li>                                        
                    </ul>
                </nav>
                <C.Forms>
                    <img src={Logo} id="Logo2" alt="Logo" />
                    <C.Form>
                        <label for="email">Email</label>
                        <input type="email" id="email"/>

                        <label for="password">Password</label>
                        <input type="password" id="password"/>
                    </C.Form>
                    <C.FormCheck>
                        <div className="customcheckbox">
                            <input type="checkbox" id="remember"/>
                            <label for="remember">Manter Conectado</label>
                        </div>
                    </C.FormCheck>
                    <C.Button>Conecte-se</C.Button>

                    <p id='connecterror'>Não consegue se conectar?</p>
                </C.Forms>
                <C.SocialMedias>
                    <C.SocialMedia>
                        <div className="content">
                            <img src={Twitter} alt="" />
                            <div className="column">
                                <div className="title">Twitter</div>
                                <div className="subtitle">@Project</div>
                            </div>
                        </div>
                    </C.SocialMedia>
                    <C.SocialMedia>
                        <div className="content">
                            <img src={Discord} alt="" />
                            <div className="column">
                                <div className="title">Discord</div>
                                <div className="subtitle">discord.gg/project</div>
                            </div>
                        </div>
                    </C.SocialMedia>
                    <C.SocialMedia>
                        <div className="content">
                            <img src={Youtube} alt="" />
                            <div className="column">
                                <div className="title">Youtube</div>
                                <div className="subtitle">@Project</div>
                            </div>
                        </div>
                    </C.SocialMedia>
                    <C.SocialMedia>
                        <div className="content">
                            <img src={Teamspeak} alt="" />
                            <div className="column">
                                <div className="title">TeamSpeak</div>
                                <div className="subtitle">ts.project.com</div>
                            </div>
                        </div>
                    </C.SocialMedia>
                </C.SocialMedias>
                <C.BottomText position="left">Project・2023 - Todos os direitos reservados </C.BottomText>
                <C.BottomText position="right">Não somos afiliados com Mojang. </C.BottomText>
            </C.Header>
        </C.Container>
    )
}

export default App