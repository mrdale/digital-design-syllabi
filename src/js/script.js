function boo(words) {
  console.log(words)
}

   function accordion(parent) {
     if (parent) {
       const dl = document.querySelectorAll(`.${parent}`);

       dl.forEach(function (x) {
         const dts = x.querySelectorAll('dt');

          const firstdd = dts[0].nextElementSibling;
          dts[0].classList.add('active');
          firstdd.classList.add('active');
          firstdd.style.maxHeight = firstdd.scrollHeight + 'px';

         dts.forEach(function (dt) {
           dt.addEventListener('click', function () {
             // Toggle active class on the clicked dt
             this.classList.toggle('active');

             // Toggle the max-height of the directly following dd element
             const nextDD = this.nextElementSibling;
             if (nextDD.style.maxHeight) {
               nextDD.style.maxHeight = null;
               nextDD.classList.toggle('active');
             } else {
               nextDD.classList.toggle('active');
               nextDD.style.maxHeight = nextDD.scrollHeight + 'px';
             }
           });
         });
       })
     }
   }

accordion('accordion');