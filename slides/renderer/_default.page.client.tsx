import './PageShell.css'
import './components/Logo/vite-plugin-ssr.svg'
import './components/Logo/telefunc.svg'

window.onkeydown  = ({code, shiftKey}) => {
  //console.log(code)

  const { pathname } = window.location

  const slideNumber = parseInt(pathname.slice(1), 10)
  let slideNumberNext = slideNumber

  if (['ArrowLeft'].includes(code) ) {
    if( shiftKey ){
    slideNumberNext++
    } else {
    slideNumberNext --
    }
  }
  if (['ArrowRight', 'Space'].includes(code) ) {
    if( shiftKey ){
    slideNumberNext--
    } else {
    slideNumberNext++
    }
  }

  if( slideNumberNext !== slideNumber && slideNumberNext !== 0) {
    window.location.href = String(slideNumberNext)
  }
}
