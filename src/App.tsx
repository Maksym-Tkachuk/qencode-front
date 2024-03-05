import github from 'src/assets/images/svg/github.svg'
import Button from 'src/components/Button'

import './styles/fonts.css'
import './styles/normalize.css'

const App = (): JSX.Element => {
  return (
    <Button icon={<img src={github} alt="github" />} variant="outlined">
      Github
    </Button>
  )
}

export default App
