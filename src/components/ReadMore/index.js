// Write your code here
import {useState} from 'react'

import {
  AppContainer,
  MainContainer,
  Heading,
  SubHeading,
  CardContainer,
  ReactHookImage,
  ReactHooksDescription,
  ReadMoreButton,
} from './styledComponents'

const ReadMore = props => {
  const [isFullDisplayText, setText] = useState(false)

  const {reactHooksDescription} = props

  const onClickReadMore = () => {
    setText(prevState => !prevState)
  }

  const displayText = isFullDisplayText ? 'none' : 4

  const description = isFullDisplayText
    ? reactHooksDescription
    : reactHooksDescription.slice(0, 170)

  const ChangeButtonText = isFullDisplayText ? 'Read Less' : 'Read More'

  return (
    <AppContainer>
      <MainContainer>
        <Heading>React Hooks</Heading>
        <SubHeading>Hooks are a new addition to React</SubHeading>
        <CardContainer>
          <ReactHookImage
            src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
            alt="react hooks"
          />
          <ReactHooksDescription displayText={displayText}>
            {description}
          </ReactHooksDescription>
        </CardContainer>
        <ReadMoreButton onClick={onClickReadMore}>
          {ChangeButtonText}
        </ReadMoreButton>
      </MainContainer>
    </AppContainer>
  )
}

export default ReadMore
