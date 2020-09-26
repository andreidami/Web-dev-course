
(async () => { 
    const one = await fetch("http://swapi.dev/api/people/1/");
      if (one.ok === true){
        const personOne = await one.json();
        console.log(personOne);
        document
        .getElementById("one")
        .getElementsByTagName("p")[0]
        .getElementsByTagName("span")[0].innerText = personOne.name;

        document
        .getElementsByTagName("p")[1]
        .getElementsByTagName("span")[0].innerText = personOne.height;

        document
        .getElementsByTagName("p")[2]
        .getElementsByTagName("span")[0].innerText = personOne.mass;

        document

         .getElementsByTagName("p")[3]
        .getElementsByTagName("span")[0].innerText = personOne.hair_color;

        document
        .getElementsByTagName("p")[4]
        .getElementsByTagName("span")[0].innerText = personOne.birth_year;

        document
        .getElementsByTagName("p")[5]
        .getElementsByTagName("span")[0].innerText = personOne.gender;}



        const two = await fetch("http://swapi.dev/api/people/4/");
        if (two.ok === true){
          const personTwo = await two.json();
          console.log(personTwo);


        document
        .getElementById("two")
        .getElementsByTagName("p")[0]
        .getElementsByTagName("span")[0].innerText = personTwo.name;

        document
        .getElementById("two")
        .getElementsByTagName("p")[1]
        .getElementsByTagName("span")[0].innerText = personTwo.height;

        document
        .getElementById("two")
        .getElementsByTagName("p")[2]
        .getElementsByTagName("span")[0].innerText = personTwo.mass;

        document
        .getElementById("two")
         .getElementsByTagName("p")[3]
        .getElementsByTagName("span")[0].innerText = personTwo.hair_color;

        document
        .getElementById("two")
        .getElementsByTagName("p")[4]
        .getElementsByTagName("span")[0].innerText = personTwo.birth_year;

        document
        .getElementById("two")
        .getElementsByTagName("p")[5]
        .getElementsByTagName("span")[0].innerText = personTwo.gender;}


        
        const thre = await fetch("http://swapi.dev/api/people/20/");
        if (thre.ok === true){
          const personThre = await thre.json();
          console.log(personThre);

          document
        .getElementById("thre")
        .getElementsByTagName("p")[0]
        .getElementsByTagName("span")[0].innerText = personThre.name;

        document
        .getElementById("thre")
        .getElementsByTagName("p")[1]
        .getElementsByTagName("span")[0].innerText = personThre.height;

        document
        .getElementById("thre")
        .getElementsByTagName("p")[2]
        .getElementsByTagName("span")[0].innerText = personThre.mass;

        document
        .getElementById("thre")
         .getElementsByTagName("p")[3]
        .getElementsByTagName("span")[0].innerText = personThre.hair_color;

        document
        .getElementById("thre")
        .getElementsByTagName("p")[4]
        .getElementsByTagName("span")[0].innerText = personThre.birth_year;

        document
        .getElementById("thre")
        .getElementsByTagName("p")[5]
        .getElementsByTagName("span")[0].innerText = personThre.gender;
      
    }
      }) ()
      