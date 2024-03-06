import github from 'src/assets/images/svg/github.svg'
import Button from 'src/components/Button'

import Input from './components/Input'
import InputPassword from './features/InputPassword'
import './styles/fonts.css'
import './styles/normalize.css'

const App = (): JSX.Element => {
  return (
    <>
      <InputPassword />
      <Input placeholder="Enter email" />
      <Button icon={<img src={github} alt="github" />} variant="outlined">
        Github
      </Button>
    </>
  )
}

export default App
