let Layer = document.querySelector('.overlayLoading')
setInterval(()=>{
  Layer.style.display='none'
    },2000)

// // varibels 
let box_word = document.querySelector('.box-word');
let bar = document.querySelector('.advancedPage .SettingsBar')
let inputKey = document.querySelector('.advancedPage .input #input-word');
let mistakes = document.querySelector('.advancedPage .SettingsBar .mistakes p')
let timeLeft = document.querySelector('.advancedPage .SettingsBar .time-box .time')
let boxTime = document.querySelectorAll('.advancedPage .SettingsBar .time-box p')
let correct_letters = document.querySelector('.advancedPage .SettingsBar .correct-letters p')
let corect = document.querySelector('.advancedPage .SettingsBar .correct-letters p')
let correct_word = document.querySelector('.advancedPage .SettingsBar .correct-word p')
let resultchange = document.querySelector('.advancedPage .result .circle p ')
let box_span =document.querySelectorAll('.advancedPage .box-word span')
let result =document.querySelector('.result')
let index = mistake = type =  0;

// // varibels 
//     //   data english 
let dataEnglish = [
    "between one over water thing saw tree America untill America close around only side for really group side for really group men know world high and by been let that set eye still let blew hand air then he read began city head city try try no she stop life mean sentence ",
    'now three after night river but would had are hear well he under try childern write head for have could thought learn quick they grow hight get word stop number four its learn back very once does river great and car keep light anther grow man long world through would around face page',
    'sometimes world been  does water spell still earth plant way big second get help began miss many old much open quite its call way above down three quick if take always its they would never qustion hand white make once or lice tree answer is mile tme great always sentence call',
    'take water my like like togther enough any these such which on old does grow on light may came list name list kind go along girl small your really list sea had its di part began young both point father hand house by you start form so because through been intro boy each food paper',
    'konw set somthings leave different school every by she house own with untill threr give and follow my without animal mother been more mean below without feet right cut start very men back next imporant walk look is America though litle said air tell near her then around large with for',
    'know seem while long up fact which her each come lead might people many must begin how which no those out end through present give year uf before with feel public might well present back up problem little turn too feel real other nation this',
    'during point much be say begin on go too for new on would be part people like other which make develop head too year get right do state house both also during public some if than out still help find each many still for house who tell real home fact ',
    'begin very off never eye take there it this same school but you word system have day another school get by could because same world over real program just she the think system course how problem interest off with those few from point against',
    'ask from work under one change year people day lead large again mean over keep call also see up against of up end down program do take late thing or people the high develop not way time up take this come become see day whice during program still'
] 
//         //   data english 
         
//         // random data 
        function randomEnglish(){
            let random = Math.floor(Math.random()* dataEnglish.length)
            box_word.textContent = ''
            dataEnglish[random].split('').forEach(el=>{
              
           let spans = `<span>${el}</span>`
            box_word.innerHTML += spans

            })
            document.addEventListener('keypress',() => inputKey.focus())
        }
        randomEnglish()
//         // random data 
         

//         // data show 
        function show(){
            let catogery = document.querySelectorAll('span')
            let inputfiled = inputKey.value.split('')[index]
            if(!type){
                time();
                timeLeft.style.display = 'block'
                type = true;
            }
            if(inputfiled == null){
                index --;
                if( catogery[index].classList.contains('mistake')){
                  mistake --
                }
                catogery[index].classList.remove('correct','mistake')
            }else{
                if(catogery[index].innerText === inputfiled){
                    catogery[index].classList.add('correct');
           
                    }else{
                        catogery[index].classList.add('mistake')
                        mistake ++;
                    }
                    index ++;
            }
            catogery.forEach(act =>{
                act.classList.remove('active')
            })
            catogery[index].classList.add('active')
            mistakes.innerHTML = mistake
            correct_letters.innerHTML = index - mistake
             let wpm = Math.round((( index + mistake ) /5 -2))
             correct_word.innerHTML = wpm
        
        }
        window.addEventListener('input', show)

  
//         // data show 
        // time function start  
        function time(){
            let timer = setInterval(()=>{
                timeLeft.innerHTML --;
               if(timeLeft.innerHTML == 0){
                 box_word.classList.add('hide')
                 result.style.display = 'block'
                 resultchange.innerHTML = correct_word.innerHTML
                 bar.style.display = 'none'
                clearInterval(timer)
               }
            },1000)
        }  

//         // time function  end
//         // chose any time you want 
        boxTime.forEach((e)=>{
            
            e.addEventListener('click',(el)=>{
               
                  timeLeft.innerHTML= e.innerHTML 
                  e.classList.add('gold')
            })
        })
            // chose any time you want 
    //  arbic game start
//     let dataArbic = [
//         'البرت انشتاين عالم الماني الجنسية اشتهر بأب النسبية وقد طور العديد من النظريات العلمية التي ساعدت البشر بشكل كبير جدا في مجال الفيزياءوقد حصل علي جائزة نوبل في الفزياء البرت انشتاين عالم الماني الجنسية اشتهر بأب النسبية وقد طور العديد من النظريات العلمية التي ساعدت البشر بشكل كبير جدا في مجال الفيزياء',
//         'ولد ابن تيمية في حران للفقيه الحنبلي عبد الحليم ابن تيمية ونشأ نشأته الاولى في مدينة حران بعد بلوغه سن السابعة هاجرت عائلته منها الى مدينة دمشق بسبب اغارة التتار عليها واجه ابن تيمية السجن عدة مرات لقد بنى أصحاب هذا القانون موقفهم على أن العقل هو أساس النقل، فبالعقل عرفنا ربنا، وبالعقل عرفنا صدق النبي محمد صلى الله عليه وسلم',
//         'تونس مدينة عصرية ومزدهرة  ومجيدة التاريخ  ،فهي  لا تتوقف  عن مفاجأتك. من جانب المدينة العتيقة ، عديد  البناءات القديمة تفتح أبوابها،  بعضها  تحولت إلى متاحف وأخرى إلى دور ثقافة أو  إلى مطاعم  و مقاهى وقاعات شاي. مدرجة من قبل منظمة اليونسكو على قائمة التراث العالمي، المدينة العتيقة تحتوي على نفائس معمارية مما',
//         'هاجر الرسول محمّد عليه السلام من مكّة المكرّمة بعد 13 عاماً منذ بعثته وذلك لشدّة الأذى الذي تعرّض له ولأصحابه من المشركين النبي محمّد عليه الصلاة والسلام، من مكة المكرمة، من قبيلة قريش، وهو يتيم الأب، وأمه آمنة بنت وهب التي توفيت وهو في عمر الـ 6 سنوات، ومرضعته حليمة السعدية، إذ رباه جده عبد المطلب وعندما توفي جده رباه عمه أبو طالب، ',
//         'جافا سكريبت هي لغة برمجة صممت في الأصل لإضافة مؤثرات وتفاعلات لصفحات الويب، ويعنى بالتفاعلات كل ما يتم عمله أو إجراؤه على مستوى المتصفح من دون الحاجة لإعادة تحميل الصفحة. نذكر على سبيل المثال هناك حدود يحاط بها الجافا سكريبت في المتصفح بحيث لا يستطيع تجاوزها، والهدف بكل تأكيد هو حماية بيانات '
//       ]
//       let agan = false;
//       let boxTime_arbic = document.querySelectorAll('.SettingsBar_arbic .time-box p')
//       let arbic_show = document.querySelector('.box-word-arbic');
//       let input_arbic = document.querySelector('.input-arbic input');
//       let correct_letters_arbic = document.querySelector('.SettingsBar_arbic .correct-letters p');
//       let correct_wordArbic  = document.querySelector('.SettingsBar_arbic .correct-word p');
//       let error__arbic = document.querySelector(' .SettingsBar_arbic .mistakes p')
//       let num = miss = 0
//     function rando() {
//         let randomArbic = Math.floor(Math.random() * dataArbic.length)
//         dataArbic[randomArbic].split('').forEach((span)=>{
//           let spans = `<span>${span}</span>`
//           arbic_show.innerHTML += spans
//         })
//         document.addEventListener('keypress',() => input_arbic.focus())
//     }
//          rando()
//     function show_arbic(){
//       let catogery_arbic = document.querySelectorAll('.box-word-arbic span')
//       let inputfiled_arbic = input_arbic.value.split('')[num]
//       if(inputfiled_arbic == null){
//           num --;
//           if( catogery_arbic[num].classList.contains('mistake')){
//             miss --
//           }
//           catogery_arbic[num].classList.remove('correct','mistake')
//       }else{
//           if(catogery_arbic[num].innerText === inputfiled_arbic){
//               catogery_arbic[num].classList.add('correct');
//               }else{
//                   catogery_arbic[num].classList.add('mistake')
//                   miss ++;
//               }
//               num ++;
//       }
//       catogery_arbic.forEach(el =>{
//           el.classList.remove('active')
//       })
//       catogery_arbic[num].classList.add('active')
//       error__arbic.innerHTML = miss
//       correct_letters_arbic.innerHTML = num - miss
//        let wpm = Math.round((( num + miss ) /5 -2))
//        correct_wordArbic.innerHTML = wpm
  
//   }
//   window.addEventListener('input', show_arbic)
//   boxTime_arbic.forEach((e)=>{
            
//     e.addEventListener('click',(el)=>{
//           boxTime_arbic.innerHTML= e.innerHTML 
//           e.classList.add('gold')
//           console.log('p')
//     })
// })
// let arbic = document.querySelector('.SettingsBar_arbic .language p')
// let english = document.querySelector('.advancedPage .SettingsBar_arbic li .english')
// let SettingsBar = document.querySelector('.advancedPage .SettingsBar')
// let SettingsBar_arbic = document.querySelector('.SettingsBar_arbic')
//     //  arbic game end 
//     arbic.addEventListener('click',()=>{
//       box_word.style.display = 'none'
//       SettingsBar.style.display = 'none'
//       arbic_show.style.display = 'block'
//       input_arbic.style.display = 'block'
//     });


    
//     english.addEventListener('click',()=>{
//       box_word.style.display = 'block';
//       arbic_show.style.display = 'none'
//       SettingsBar_arbic.style.display = 'none'
//       box_word.style.display = 'block';
//       input_arbic.style.display = 'none'
//     })



