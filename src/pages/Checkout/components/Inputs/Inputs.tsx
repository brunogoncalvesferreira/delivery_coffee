import { useFormContext } from 'react-hook-form'
import { ContentInput, InputContainer } from './styles'
import { ReactNode } from 'react'

// import { ErrorMessage } from '@hookform/error-message'

export function Inputs() {
  const {
    register,
    formState: { errors },
  } = useFormContext()
  return (
    <ContentInput>
      <input
        {...register('cep')}
        type="number"
        className="cep"
        placeholder="CEP"
      />
      {errors.cep && <span>{errors.cep.message as ReactNode}</span>}
      <input
        {...register('street')}
        type="text"
        className="street"
        placeholder="Rua"
      />
      {errors.street && <span>{errors.street.message as ReactNode}</span>}
      <div>
        <InputContainer>
          <input
            {...register('number')}
            type="number"
            className="number"
            placeholder="Número"
          />
          {errors.number && <span>{errors.number.message as ReactNode}</span>}
        </InputContainer>
        <div className="optional">
          <input
            {...register('complement')}
            type="text"
            className="complement"
            placeholder="Complemento"
          />
          <strong>Opcional</strong>
        </div>
      </div>

      <div>
        <InputContainer>
          <input
            {...register('neighborhood')}
            type="text"
            className="neighborhood"
            placeholder="Bairro"
          />
          {errors.neighborhood && (
            <span>{errors.neighborhood.message as ReactNode}</span>
          )}
        </InputContainer>
        <InputContainer>
          <input
            {...register('city')}
            type="text"
            className="city"
            placeholder="Cidade"
          />
          {errors.city && <span>{errors.city.message as ReactNode}</span>}
        </InputContainer>
        <InputContainer>
          <input
            {...register('uf')}
            type="text"
            className="uf"
            placeholder="UF"
          />
          {errors.uf && <span>{errors.uf.message as ReactNode}</span>}
        </InputContainer>
      </div>
    </ContentInput>
  )
}
