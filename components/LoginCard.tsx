'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Spinner } from "@/components/ui/spinner"
import { useRouter } from "next/navigation"
import Image from "next/image"
import LoginImage from "@/public/loginPicture.jpg"


const LoginCard = () => {
  const router = useRouter()
  const [loading,setLoading] = useState(false)
  const [loginUserData,setLoginUserData] = useState({
    email: "",
    password: ""
  })

  //insert input values to state
  const handleChange = ( textField:string, value:string) =>{
    setLoginUserData({
      ...loginUserData,
      [textField]: value
    })
  }

  //login user
  const loginUser = () =>{
    setLoading(true)

    if(loginUserData.email === "admin" && loginUserData.password === "123"){
      setTimeout(()=>(router.replace('/chatScreen'),800))
    }else{
      alert("Invalid Credentials")
      setLoading(false)
    }
  }

  return (
    <main className="flex flex-col sm:flex-col md:flex-row min-h-screen w-full">
      {/* FIRST SECTION WITH FORM  */}
      <div className="w-full flex flex-col gap-2 flex-1 justify-center items-center py-3">
        <div>
          <Image
            src="/logo.png"
            alt="Logo Picture"
            width={70}
            height={70}
          />
          <h1 className=" text-2xl">Chatty</h1>
        </div>
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Login to your account</CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    value={loginUserData.email}
                    onChange={(e)=>handleChange('email', e.target.value)}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                  </div>
                  <Input 
                    id="password" 
                    type="password"
                    value={loginUserData.password}
                    onChange={(e)=>handleChange('password', e.target.value)} 
                    required 
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            {loading ? 
              <Button className="w-full" disabled>
                <Spinner/> 
                Please wait...
              </Button>
              : 
              <Button className="w-full cursor-pointer" onClick={()=>loginUser()}>
                Login
              </Button>
            }
          </CardFooter>
        </Card>
      </div>

      {/* SECOND SECTION WITH IMAGE  */}
      <div className="flex flex-1 justify-center items-center">
        <Image
          src={LoginImage}
          alt="loginPicture"
          className="w-full min-h-screen"
        />
      </div>
    </main>

  )
}

export default LoginCard;