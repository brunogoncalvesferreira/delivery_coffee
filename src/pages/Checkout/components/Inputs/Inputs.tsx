import { ContentInput } from './styles'

export function Inputs() {
  return (
    <ContentInput>
      <input type="text" className="cep" placeholder="CEP" />
      <input type="text" className="street" placeholder="Rua" />

      <div>
        <input type="text" className="number" placeholder="Número" />
        <div className="optional">
          <input type="text" className="complement" placeholder="Complemento" />
          <span>Opcional</span>
        </div>
      </div>

      <div>
        <input type="text" className="neighborhood" placeholder="Bairro" />
        <input type="text" className="city" placeholder="Cidade" />
        <input type="text" className="uf" placeholder="UF" />
      </div>
    </ContentInput>
  )
}
