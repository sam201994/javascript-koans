var _; // globals

describe("About Applying What We Have Learnt", function() {
  var products;

  beforeEach(function () { 
    products = [
       { name: "Sonoma", ingredients: ["artichoke", "sundried tomatoes", "mushrooms"], containsNuts: false },
       { name: "Pizza Primavera", ingredients: ["roma", "sundried tomatoes", "goats cheese", "rosemary"], containsNuts: false },
       { name: "South Of The Border", ingredients: ["black beans", "jalapenos", "mushrooms"], containsNuts: false },
       { name: "Blue Moon", ingredients: ["blue cheese", "garlic", "walnuts"], containsNuts: true },
       { name: "Taste Of Athens", ingredients: ["spinach", "kalamata olives", "sesame seeds"], containsNuts: true }
    ];
  });

  /*********************************************************************************/

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (imperative)", function () {
    var i,j,hasMushrooms, productsICanEat = [];

    for (i = 0; i < products.length; i+=1) {
        if (products[i].containsNuts === false) {
            hasMushrooms = false;
            for (j = 0; j < products[i].ingredients.length; j+=1) {
               if (products[i].ingredients[j] === "mushrooms") {
                  hasMushrooms = true;
               }
            }
            if (!hasMushrooms) productsICanEat.push(products[i]);
        }
    }

    expect(productsICanEat.length).toBe(1);
  });

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (functional)", function () {
      var productsICanEat = [];

      productsICanEat=products.filter(function(item){
      return  item.ingredients.join(",").indexOf("mushroom")<0 && item.ingredients.join(",").indexOf("nut")<0
      });
      /* solve using filter() & all() / any() */


      expect(productsICanEat.length).toBe(2);
  });

  /*********************************************************************************/

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (imperative)", function () {
    var sum = 0;

    for(var i=1; i<1000; i+=1) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
    //console.log(sum);
    expect(sum).toBe(233168);
  });

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (functional)", function () {
    var sum = 0;  
    var arr=[];
    for(var i=0;i<1000;i++)
      arr.push(i);
      /* try chaining range() and reduce() */
      sum= _.reduce(arr,function(sum,item){
        if(item%3 ===0 || item%5===0)
        {
          sum=sum+item;
        }
        return sum;

      },sum);

    expect(sum).toBe(233168);
  });

  /*********************************************************************************/
   it("should count the ingredient occurrence (imperative)", function () {
    var ingredientCount = { "{ingredient name}": 0 };

    for (i = 0; i < products.length; i+=1) {
        for (j = 0; j < products[i].ingredients.length; j+=1) {
            ingredientCount[products[i].ingredients[j]] = (ingredientCount[products[i].ingredients[j]] || 0) + 1;
        }
    }

    expect(ingredientCount['mushrooms']).toBe(2);
  });

  it("should count the ingredient occurrence (functional)", function () {
    var ingredientCount = { "{ingredient name}": 0 };

    /* chain() together map(), flatten() and reduce() */
    _.flatten(products.map(function(item){
      return item.ingredients;
    })).reduce(function(obj,ing){

      if(obj[ing])
      {
        obj[ing]++;
      }
      else
        obj[ing]=1;

      return obj;

    },ingredientCount);


    expect(ingredientCount['mushrooms']).toBe(2);
  });

  /*********************************************************************************/
  /* UNCOMMENT FOR EXTRA CREDIT */
  
  it("should find the largest prime factor of a composite number", function (number) {
    var number=12;
    var primeFactor;
    for(var i=number;i>=2;i--)
    {
      if(number%i===0 && isPrime(i))
        {
            primeFactor=i;
            //console.log("i",i);
            break;
        } 

    }
    function isPrime(n){
      for(var i=2;i<n;i++)
      {
        if(n%i===0)
          return false;
      }
      return true;
    }
    
   expect(primeFactor).toBe(3);
  
  });
/*
  it("should find the largest palindrome made from the product of two 3 digit numbers", function () {


    
  });
*/
  it("should find the smallest number divisible by each of the numbers 1 to 20", function () {
    var lcm=1;
      for(var i=1;i<=20;i++)
        lcm=lcm*i;

      expect(lcm).toBe(2432902008176640000);
    
    
  });

  it("should find the difference between the sum of the squares and the square of the sums", function () {
    var arr=[1,2,3,4,5];
    var sumOfSquares=0;
    var squareOfsum=0;
    var diff;

   sumOfSquares= _.reduce(arr,function(sumOfSquares,item){
      return sumOfSquares+(item*item);
    },sumOfSquares);


    squareOfsum=Math.pow(_.reduce(arr,function(sum,item){
      return sum+item;
    },0),2) ;
   

    diff=Math.abs(squareOfsum-sumOfSquares);
    //console.log(diff);
    expect(diff).toBe(170);


  });

  it("should find the 10001st prime", function () {
  
   function isPrime(n){
      for(var i=2;i<=Math.sqrt(n);i++)
      {
        if(n%i===0)
          return false;
      }
      return true;
    }
  var count=0;
  var i=2;
    while(count<10001)
    {
        if(isPrime(i))
        {
          count++;
          //console.log(count,":",i);
        }
        i++;
    }
    expect(i-1).toBe(104743)
       
  });
  
  
});
