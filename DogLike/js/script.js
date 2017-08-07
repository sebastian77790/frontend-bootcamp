document.addEventListener("DOMContentLoaded", function(){
 const list = document.getElementById("list");	
 const url = "https://dog.ceo/api/breeds/image/random";
 const dogImage = document.getElementById("imgDog");
 const nameDogImage = document.getElementById("nameDogImage");
 const likeDog = document.getElementById("like");
 const dislikeDog = document.getElementById("dislike");

	function createDesc(Description) {
		const res = Description.split("/");
		let dogName = res[5];
		dogName = dogName.charAt(0).toUpperCase() + dogName.slice(1);
		dogName = dogName.replace("-", " ");
		let nameArray = dogName.split(" ");

		if (nameArray.length === 1){
		 dogName = nameArray[0];
		}
		else {
		 let nameSecondPart = nameArray[1];
		 nameSecondPart = nameSecondPart.charAt(0).toUpperCase() + nameSecondPart.slice(1);
		 dogName = nameArray[0] + " " + nameSecondPart;
		}
		nameDogImage.innerHTML = dogName;
	}

	function createImage(imageURL) {
		dogImage.setAttribute("src", imageURL);
		dogImage.setAttribute("height", 300);
	}

	function fetchData() {
		fetch(url)
			.then(function(response) {
			 return response.json();
			})
			.then(function(json) {
			   createImage(json.message);
			   createDesc(json.message);	   
			})
	}
 
	function storeDogs(name, img){
		let Items = JSON.parse(localStorage.getItem("Dogs")) || [];
		// const { results } = json;

		let objDog = { 
		   "DogName":name,
		   "Img": img
		};
		Items.push(objDog);
		localStorage.setItem("Dogs", JSON.stringify(Items));
		debugger;
		listStoredDogs();
	}
 
 
	function listStoredDogs(){
		let DogList = JSON.parse(localStorage.getItem("Dogs"));
		createList(DogList);
	}
 
	function createList(results) {
	  results.forEach(function (el) {
		list.appendChild(createItem(el));
	  });
	}
 
	function createTitle(title) {
	  const titleEl = document.createElement("h3");
	  titleEl.innerHTML = title + "";
	  return titleEl;
	}

	function createImageList(imageURL) {
	  const image = document.createElement("img");
	  image.setAttribute('src', imageURL);
	  image.setAttribute('height', 150);
	  
	  return image;
	}
 
	function createItem(Dog) {
	  const urlImage = Dog.Img;
	  const image = createImageList(urlImage);
	  const title = createTitle(Dog.DogName);
	  const el = document.createElement("li");
	  el.appendChild(title);
	  el.appendChild(image);
	  return el;
	}

	likeDog.addEventListener("click",function(){
	   document.querySelector(".likeContainer").classList.add("likeAnimation");
	   let imgName = nameDogImage.textContent;
	   let imgValue = dogImage.getAttribute("src");
	   
	   storeDogs(imgName, imgValue);
	   fetchData();
	   setTimeout(function(){
		   document.querySelector(".likeContainer").classList.remove("likeAnimation");   
	   }, 2100);
	   // document.querySelector(".likeAnimation").addEventListener("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", 
	   // function(event) {
		   // debugger;
		  // document.querySelector(".likeContainer").classList.remove("likeAnimation");
		// }, false);
	});
 
	dislikeDog.addEventListener("click",function(){
		document.querySelector(".likeContainer").classList.add("dislikeAnimation");
		fetchData();
		setTimeout(function(){
			document.querySelector(".likeContainer").classList.remove("dislikeAnimation");
		}, 2100);
		// document.querySelector(".dislikeAnimation").addEventListener("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", 
		// function(event) {
		  // document.querySelector(".likeContainer").classList.remove("dislikeAnimation");
		// }, false);
	});
 
	document.getElementById("listSaved").addEventListener("click",function(){

		// if(document.getElementById("sidebar").style.getPropertyValue("display") == "none"){
			// document.getElementById("sidebar").style.display = "inline-block";
		// }else{
			// document.getElementById("sidebar").style.display = "none";
		// }
	});
 
	if (localStorage.getItem("Dogs")) {
	  const results = JSON.parse(localStorage.getItem("Dogs"));
	  createList(results);
	  fetchData();
	} else {
	  fetchData();
	}
 
});
