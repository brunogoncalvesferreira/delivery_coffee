import { useFormContext } from 'react-hook-form'
import { ContentInput } from './styles'

export function Inputs() {
  const { register } = useFormContext()
  return (
    <ContentInput>
      <input
        {...register('cep')}
        type="number"
        className="cep"
        placeholder="CEP"
      />
      <input
        {...register('street')}
        type="text"
        className="street"
        placeholder="Rua"
      />

      <div>
        <input
          {...register('number')}
          type="number"
          className="number"
          placeholder="Número"
        />
        <div className="optional">
          <input
            {...register('complement')}
            type="text"
            className="complement"
            placeholder="Complemento"
          />
          <span>Opcional</span>
        </div>
      </div>

      <div>
        <input
          {...register('neighborhood')}
          type="text"
          className="neighborhood"
          placeholder="Bairro"
        />
        <input
          {...register('city')}
          type="text"
          className="city"
          placeholder="Cidade"
        />
        <input
          {...register('uf')}
          type="text"
          className="uf"
          placeholder="UF"
        />
      </div>
    </ContentInput>
  )
}
