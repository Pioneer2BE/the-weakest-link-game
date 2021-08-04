const pageTransition = 
{
  transition: "linear",
  duration: 0.5
}

const pageVariants = 
{
  in:{
    opacity: 1,
    y: 0
  },
  out:{
    opacity: 0,
    y: "-100vh"
  }
}

const avatarObject = [
  {
      id: 1,
      name: "Jan Smither",
      image: "avatar1.png",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo similique assumenda eius distinctio ipsum laboriosam laborum consequuntur minus aperiam provident. Expedita eligendi dignissimos itaque suscipit porro optio omnis blanditiis eveniet.",
      selected: false
  },
  {
      id: 2,
      name: "Becky Silverman",
      image: "avatar2.png",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo similique assumenda eius distinctio ipsum laboriosam laborum consequuntur minus aperiam provident. Expedita eligendi dignissimos itaque suscipit porro optio omnis blanditiis eveniet.",
      selected: false
  },
  {
      id: 3,
      name: "Tina Fu",
      image: "avatar3.png",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo similique assumenda eius distinctio ipsum laboriosam laborum consequuntur minus aperiam provident. Expedita eligendi dignissimos itaque suscipit porro optio omnis blanditiis eveniet.",
      selected: false
  },
  {
      id: 4,
      name: "Ike Fu",
      image: "avatar4.png",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo similique assumenda eius distinctio ipsum laboriosam laborum consequuntur minus aperiam provident. Expedita eligendi dignissimos itaque suscipit porro optio omnis blanditiis eveniet.",
      selected: false
  },
  {
      id: 5,
      name: "James Jackson",
      image: "avatar5.png",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo similique assumenda eius distinctio ipsum laboriosam laborum consequuntur minus aperiam provident. Expedita eligendi dignissimos itaque suscipit porro optio omnis blanditiis eveniet.",
      selected: false
  },
  {
      id: 6,
      name: "Luke Blanche",
      image: "avatar6.png",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo similique assumenda eius distinctio ipsum laboriosam laborum consequuntur minus aperiam provident. Expedita eligendi dignissimos itaque suscipit porro optio omnis blanditiis eveniet.",
      selected: false
  }

];

export {pageTransition, pageVariants, avatarObject}
