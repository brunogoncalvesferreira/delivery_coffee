import {
  AddressContainer,
  ConfirmContainer,
  Container,
  FormPayment,
  SelectedOrders,
  Wrapper,
} from './styles'

import map from '../../assets/map-2.svg'
import $ from '../../assets/$.svg'

import { Inputs } from './components/Inputs/Inputs'
import { CoffeeSelected } from './components/CoffeeSelected/CoffeeSelected'
import { InfoValues } from './components/InfoValues/InfoValues'
import { useCart } from '../../hooks/useCart'
import { Empty } from '../../components/Empty/Empty'
import { SectionTitle } from './components/SectionTitle'
import { MethodsPayment } from './components/MethodsPayment'
import { useForm, FormProvider } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'

enum PaymentMethods {
  credit = 'credit',
  debit = 'debit',
  money = 'money',
}

const confirmFormValidationSchema = z.object({
  cep: z.string().min(1, 'Informe o CEP'),
  street: z.string().min(1, 'Informe a rua'),
  number: z.string().min(1, 'Infome o número'),
  complement: z.string(),
  neighborhood: z.string().min(1, 'Informe o bairro'),
  city: z.string().min(1, 'Informe a cidade'),
  uf: z.string().min(1, 'Informe a UF'),
  methodPayment: z.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return {
        message: 'Selecione a forma de pagamento',
      }
    },
  }),
})

type FormValidation = z.infer<typeof confirmFormValidationSchema>

export function Checkout() {
  const { cart } = useCart()

  const methods = useForm<FormValidation>({
    resolver: zodResolver(confirmFormValidationSchema),
  })

  const { handleSubmit } = methods

  const navigate = useNavigate()

  function confirmOrder(data: FormValidation) {
    navigate('/success', {
      state: data,
    })
  }

  return (
    <FormProvider {...methods}>
      <Container>
        <form onSubmit={handleSubmit(confirmOrder)}>
          <AddressContainer>
            <h2>Complete seu pedido</h2>

            <Wrapper>
              <SectionTitle
                title="Endereço de entrega"
                subtitle="Informe o endereço onde deseja receber seu pedido"
                icon={map}
              />
              <Inputs />
            </Wrapper>
            <FormPayment>
              <Wrapper>
                <SectionTitle
                  title="Pagamento"
                  subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
                  icon={$}
                />

                <MethodsPayment />
              </Wrapper>
            </FormPayment>
          </AddressContainer>
          <ConfirmContainer>
            <h2>Cafés selecionados</h2>
            <SelectedOrders>
              {cart.length === 0 && <Empty />}
              {cart.map((item) => (
                <CoffeeSelected
                  key={item.id}
                  image={item.image}
                  title={item.title}
                  quantity={item.quantity}
                  price={item.price}
                  item={item}
                />
              ))}
              <InfoValues />
            </SelectedOrders>
          </ConfirmContainer>
        </form>
      </Container>
    </FormProvider>
  )
}
