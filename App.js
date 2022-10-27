import ContextProvider from './src/context'
import Main from './src/components/Main'

const App = () => (
	<ContextProvider>
		<Main />
	</ContextProvider>
)

export default App
