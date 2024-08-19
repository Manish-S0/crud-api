import user from "../models/userModel.js";

export const getUser = async (req, res) => {
  try {
    const allUser = await user.find();
    if (allUser.length===0){
      return res.status(404).json({message:"No user found"})
    }
    res.status(200).json(allUser)
  } catch (error) {
    res.status(500).json({message:error.message})
  }
}
export const getUserById=async(req,res)=>{
  try{
    const id=req.params.id;

    const userExist=user.findOne({_id:id})

    if(!userExist){
      return res.status(404).json({message:"User not found"}
      )
    }

    res.status(200).json(userExist)
  }
  catch(error){
    res.status(500).json({message:error.message})
  }
}


export const addUser = async (req, res) => {
  try{
    const {name, email, password} = req.body
    const newUser=new user({name, email, password})
    const userExist = await user.findOne({email})
    if(userExist){
      return res.status(400).json({message:"User already exists"})
    }
    const savedUser = await newUser.save()
    res.status(201).json(savedUser)
  }
  catch(error){
    res.status(500).json({message:error.message})
  }
}

export const updateUser=async(req,res)=>{
  try{
  const id=req.params.id
  const {name,email,password}=req.body

  const userExist = await user.findOne({_id:id})

  if(!userExist){
    return res.status(404).json({message:"User not found"})
  }

  const updatedUser = await user.findByIdAndUpdate(id,{name,email,password},{new:true})

  res.status(200).json(updatedUser)

  }catch(error){
    res.status(500).json({message:error.message})
  }

}

export const deleteUser=async(req,res)=>{
  try{

  
  const id=req.params.id
  const userExist = await user.findOne({_id:id})
  if(!userExist){
    return res.status(404).json({message:"User not found"})
  }
  await user.findByIdAndDelete(id)
  res.status(200).json({message:"User deleted"})
}
  catch(error){
    res.status(500).json({message:error.message})
  }
}