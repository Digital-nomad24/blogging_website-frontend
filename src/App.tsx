import {Suspense,lazy } from 'react'
import { BrowserRouter,Route,Routes} from 'react-router-dom'
const Dashboard=lazy(()=>import('./components/dashboard'))
const Signup=lazy(()=>import('./components/Signup'))
const Signin=lazy(()=>import('./components/Signin'))
const Landing=lazy(()=>import('./components/landing'))
const Edit=lazy(()=>import('./components/Edit'))

export default function App(){
  return (<div>
    <BrowserRouter>
    <Routes>
      <Route path='/edit' element={<Suspense fallback={'loading...'}><Edit></Edit></Suspense>}></Route>
      <Route path='/signup' element={<Suspense fallback={'loading...'}><Signup></Signup></Suspense>}></Route>
      <Route path='/signin' element={<Suspense fallback={'loading...'}><Signin></Signin></Suspense>}></Route>
      <Route path='/dashboard' element={<Suspense fallback={'loading...'}><Dashboard></Dashboard></Suspense>}></Route>
      <Route path='/' element={<Suspense fallback={'loading...'}><Landing/></Suspense>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  )
}
