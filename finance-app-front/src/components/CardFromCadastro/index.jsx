import './style.css'

export default function CardFrommCadastro() {
    return (
        <form>
            <div className="card_cadastro">



                {/* <label floatingInput className='label_cadastro' htmlFor="">Nome</label> */}
                <input type="text" placeholder='Nome' className='input_cadastro' />

                <label className='label_cadastro' htmlFor="">Sobrenome</label>
                <input type="text"  className='input_cadastro' />

                <label className='label_cadastro' htmlFor="">E-mail</label>
                <input type="text" className='input_cadastro' />

                <label className='label_cadastro' htmlFor="">Senha</label>
                <input type="password" className='input_cadastro' />

                <label className='label_cadastro' htmlFor="">Repetir Senha</label>
                <input type="password" className='input_cadastro' />

                <div className="checkbox">
                    <input type="checkbox" />
                    <label htmlFor="">Acaito os termos e condições</label>
                </div>

                <div className='div_btn'>
                    <button>Cadastrar</button>
                    <span>Já tenho conta</span>
                    {/* <Link className="tenho_conta" to='/Login'>
                </Link> */}
                </div>
            </div>

        </form>
    );
};