const btnEL = document.getElementById("btn");
const birthsayEL = document.getElementById("birthday");
const resultEl = document.getElementById("result");

function CalculateAge (){
      const birthsayValue = birthsayEL.value;
      if(birthsayValue === "")
      {
            alert("Please enter your birthday date.");
      }
      else{
            const age = getAge(birthsayValue);
            resultEl.innerText = `Your age is ${age} ${age <1 ? "year" : "years" } old`;
      }
}

function getAge(bage){
      const currentDate = new Date();
      const birthdayyear = new Date(bage);
      let age = currentDate.getFullYear() - birthdayyear.getFullYear();
      const month = currentDate.getDate() - birthdayyear.getDate();
      if(month <0 || (month === 0 && currentDate.getMonth() < birthdayyear.getMonth()))
      {
            --age;
      }
      return age; 
}
btnEL.addEventListener("click" , CalculateAge);