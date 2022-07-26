import { useRouter } from "next/router";



function Mypid() {

const router = useRouter()

let {pid} = router.pid

return <h1>this is my pid {pid}</h1>


}