import ShowBlog from './components/ShowBlog'
import AddBlog from './components/AddBlog'
import SingleBlog from './components/SingleBlog'
import ShowProgress from './components/ShowProgress'
import Immortal from './components/Dota2Immortal'
import SassLogIn from './components/SassLogIn'
import SortShow from './components/SortShow'
import ShowGame from './components/ShowGame'

export default[
  {path:'/',component:ShowBlog},
  {path:'/add',component:AddBlog},
  {path:'/blog/:id',component:SingleBlog},
  {path:'/showprogress',component:ShowProgress},
  {path:'/immortal',component:Immortal},
  {path:'/sass',component:SassLogIn},
  {path:'/sortshow',component:SortShow},
  {path:'/game',component:ShowGame},
]
