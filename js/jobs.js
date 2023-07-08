let products = {
    data: [
        {
            productName: "MetaCube",
            role:"JAVASCRIPT",
            category: "Javascript",
            salary: "3000",
            location:"JAIPUR",
            image: "../image/job1.png",
          },
          {
            productName: "Amazon",
            role:"REACTJS",
            category: "React-JS",
            salary: "4900",
            location:"HYDRABAD",
            image: "../image/job2.jpg",
          },
      
          {
            productName: "StudyMonk",
            role:"NODE-JS",
            category: "NODE-JS",
            salary: "4900",
            location:"CHENNAI",
            image: "../image/logo.jpg",
          },
      
          {
            productName: ".Net",
            category: "JAVA_DEVELOPER",
            role: "JAVA DEVELOPER",
            salary: "4900",
            location:"MUMBAI",
            image: "../image/job4.png",
          },
          {
            productName: "Myntra",
            category: "PYTHON_DEVELOPER",
            role: "PYTHON DEVELOPER",
            salary: "4900",
            location:"PATNA",
            image: "../image/job5.png",
          },
          {
            productName: "Meta",
            category: "AI",
            role: "AI",
            salary: "4900",
            location:"NOIDA",
            image: "../image/job6.jpg",
          },
          {
            productName: "Ai Mode",
            category: "GRAPHIC_DESIGN",
            role: "GRAPHIC DESIGN",
            salary: "4900",
            location:"GURGON",
            image: "../image/job7.png",
          },
     
          {
            productName: "MetaCube",
            role:"JAVASCRIPT",
            category: "Javascript",
            salary: "3000",
            location:"JAIPUR",
            image: "../image/job1.png",
          },
          {
            productName: "Amazon",
            role:"REACTJS",
            category: "ReactJS",
            salary: "4900",
            location:"GOA",
            image: "../image/job2.jpg",
          },
      
          {
            productName: "StudyMonk",
            role:"NODE-JS",
            category: "NODE-JS",
            salary: "4900",
            location:"CHENNAI",
            image: "../image/logo.jpg",
          },
      
          {
            productName: ".Net",
            category: "JAVA_DEVELOPER",
            role: "JAVA DEVELOPER",
            salary: "4900",
            location:"BANGLURU",
            image: "../image/job4.png",
          },
          {
            productName: "Myntra",
            category: "PYTHON_DEVELOPER",
            role: "PYTHON DEVELOPER",
            salary: "4900",
            location:"DELHI",
            image: "../image/job5.png",
          },
          {
            productName: "Meta",
            category: "AI",
            role: "AI",
            salary: "4900",
            location:"PUNE",
            image: "../image/job6.jpg",
          },
          {
            productName: "Ai Mode",
            category: "GRAPHIC_DESIGN",
            role: "GRAPHIC DESIGN",
            salary: "4900",
            location:"MUMBAI",
            image: "../image/job7.png",
          },
    ],
  };
  
  for (let i of products.data) {
     //Create Card
     let card = document.createElement("div");
     //Card should have category and should stay hidden initially
     card.classList.add("card", i.category, "hide");
     //image div
     let imgContainer = document.createElement("div");
     imgContainer.classList.add("image-container");
     //img tag
     let image = document.createElement("img");
     image.setAttribute("src", i.image);
     imgContainer.appendChild(image);
     card.appendChild(imgContainer);
     //container
     let container = document.createElement("div");
     container.classList.add("container");
     //product name
     let name = document.createElement("h2");
     name.classList.add("product-name");
     name.innerText = i.productName.toUpperCase();
     container.appendChild(name);
     //role
     let role = document.createElement("h3");
     role.classList.add("role");
     role.innerText =  i.role;
     container.appendChild(role);
 
     let money = document.createElement("h4");
     money.innerText = "Salary=" + i.salary;
     container.appendChild(money);
 
     let location = document.createElement("h4");
     location.classList.add("location");
     location.innerText = i.location;
     container.appendChild(location);
 
     let button = document.createElement("button");
     name.classList.add("hero-btn");
     button.innerText = "Apply";
     container.appendChild(button);
   
     card.appendChild(container);
     document.getElementById("products").appendChild(card);
  }
  
  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
  }
  
  //Search button click
  document.getElementById("search").addEventListener("click", () => {
    //initializations
    // console.log("hello")
    let searchInputLocation = document.getElementById("search-input-location").value;
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".role");
    let cards = document.querySelectorAll(".card");
    let locations=document.querySelectorAll(".location");
   

    
    

    let containers = document.getElementsByClassName("container");
    searchInput=searchInput.toUpperCase();
    searchInputLocation= searchInputLocation.toUpperCase();
    // console.log(searchInput);
    // console.log(searchInputLocation);
// Loop through each container

Array.from(containers).forEach((container,index) => {
  // Get the product name
 
 
  let productName = container.querySelector(".role").innerText;
  
  // Get the location
  let loc = container.querySelector(".location").innerText;
  
  // Perform actions with productName and location
  //  console.log("Product Name:", productName);
  // console.log("Location:", location);

  if (productName == searchInput && loc == searchInputLocation) {   
    //display matching card
  
 
    cards[index].classList.remove("hide");
  } 
  else if(productName == searchInput)
  {
    // console.log("palara"
    console.log("Product Name:", productName);
    
    cards[index].classList.remove("hide");
  }
  else if(loc == searchInputLocation)
  {
    

    cards[index].classList.remove("hide");
  }
  else{
    //hide others
  
    cards[index].classList.add('hide');
  }
  

});

  
   
  });
  
  
  //Initially display all products
  window.onload = () => {
    filterProduct("all");
  };