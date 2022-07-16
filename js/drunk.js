club_6 = 6; heart_6 = 6; diamond_6 = 6;spade_6 = 6;club_7 = 7;heart_7 = 7;diamond_7 = 7;spade_7 = 7;club_8 = 8;heart_8 = 8;
diamond_8 = 8;spade_8 = 8;club_9 = 9;heart_9 = 9;diamond_9 = 9;spade_9 = 9;club_10 = 10;heart_10 = 10;diamond_10 = 10;
spade_10 = 10;jack_club = 2;jack_heart = 2;jack_diamond = 2;jack_spade = 2;queen_club = 3;queen_heart = 3;queen_diamond = 3;
queen_spade = 3;king_club = 4;king_heart = 4;king_diamond = 4;king_spade = 4;ace_club = 11;ace_heart = 11;ace_diamond = 11;ace_spade = 11;

var Array = [club_6,club_7,club_8,club_9,club_10,jack_club,queen_club,king_club,ace_club,
heart_6,heart_7,heart_8,heart_9,heart_10,jack_heart,queen_heart,king_heart,ace_heart,
diamond_6,diamond_7,diamond_8,diamond_9,diamond_10,jack_diamond,queen_diamond,king_diamond,ace_diamond,
spade_6,spade_7,spade_8,spade_9,spade_10,jack_spade,queen_spade,king_spade,ace_spade];

var Array_rus = ["6 креста","7 креста","8 креста","9 креста","10 креста","Валет креста","Дама креста","Король креста","Туз креста",
"6 чирва","7 чирва","8 чирва","9 чирва","10 чирва","Валет чирва","Дама чирва","Король чирва","Туз чирва",
"6 бубна","7 бубна","8 бубна","9 бубна","10 бубна","Валет бубна","Дама бубна","Король бубна","Туз бубнаа",
"6 пика","7 пика","8 пика","9 пика","10 пика","Валет пика","Дама пика","Король пика","Туз пика",];

var player_1 = [];         //колодa игрока 1
var q
var player_2 = [];         //колодa игрока 2
var player_1_rus = [];     //колодa игрока 1 с названиеями карт
var player_2_rus = [];     //колодa игрока 2 с названиеями карт
var n = 35;                //колличество карт в колоде
var p1=0;                  //число карт в массиве 1 игрока
var p2=0;                  //число карт в массиве 2 игрока


//Раздача карт
while (n>0){
q = Math.floor((Math.random() * n));
n--;
player_1[p1]= Array[q];
player_1_rus[p1]= Array_rus[q];
Array.splice(q,1);
Array_rus.splice(q,1);
p1++;

q = Math.floor((Math.random() * n));
n--;
player_2[p2]= Array[q];
player_2_rus[p2]= Array_rus[q];
Array.splice(q,1);
Array_rus.splice(q,1);
p2++;
//console.log(n, player_1,player_2,player_1_rus,player_2_rus)
//console.log(n, p1,p2,Array_rus)
//console.log(Array_rus,Array)
}
//console.log(player_1,player_1_rus)
//while (player_1.length>-1 && player_2.length>-1)
z=300;
while (z>0) {
    if (player_1 [0] > player_2 [0]){
        player_1.push(player_2 [0]);
        player_1.push(player_1 [0]);
        player_2.splice(0,1);
        player_1.splice(0,1);
    }
    else if (player_1 [0] < player_2 [0]){
        player_2.push(player_1 [0]);
        player_2.push(player_2 [0]);
        player_1.splice(0,1);
        player_2.splice(0,1);
    }
    else if (player_1.length<1){
        alert("Победил 2 игрок");

        //delete player_1 [0,1,2,3,4,5,6,7];
        z=0;
    }
    else if (player_2.length<1){
        alert("Победил 1 игрок")
       // delete player_2 [0,1,2,3,4,5,6,7];
        z=0;
    }
    else if (player_1 [0] = player_2 [0]){
        if (player_1 [2] > player_2 [2]){
            player_1.push(player_2 [0],player_2 [1],player_2 [2]);
            player_1.push(player_1 [0],player_1 [1],player_1 [2]);
            player_2.splice(0,3);
            player_1.splice(0,3);
        }
        else if (player_1 [2] < player_2 [2]){
            player_2.push(player_1 [0],player_1 [1],player_1 [2]);
            player_2.push(player_2 [0],player_2 [1],player_2 [2]);
            player_1.splice(0,3);
            player_2.splice(0,3);
        }
        else if (player_1.length<3){
            player_2.push(player_1 [0],player_1 [1],player_1 [2]);
            player_1.splice(0,3);
            alert("Победил 2 игрок");

            //delete player_1 [0,1,2,3,4,5,6,7];
            z=0;
        }
        else if (player_2.length<3){
            player_1.push(player_2 [0],player_2 [1],player_2 [2]);
            player_2.splice(0,3);
            alert("Победил 1 игрок");
           // delete player_2 [0,1,2,3,4,5,6,7];
           z=0;
        }
        else if (player_1 [2] = player_2 [2]){
            if (player_1 [4] > player_2 [4]){
                player_1.push(player_2 [0],player_2 [1],player_2 [2],player_2 [3],player_2 [4]);
                player_1.push(player_1 [0],player_1 [1],player_1 [2],player_1 [3],player_1 [4]);
                player_2.splice(0,5);
                player_1.splice(0,5);
            }
            else if (player_1 [4] < player_2 [4]){
                player_2.push(player_1 [0],player_1 [1],player_1 [2],player_1 [3],player_1 [4]);
                player_2.push(player_2 [0],player_2 [1],player_2 [2],player_2 [3],player_2 [4]);
                player_1.splice(0,5);
                player_2.splice(0,5);
            }
                else if (player_1.length<5){
                    player_2.push(player_1 [0],player_1 [1],player_1 [2],player_1 [3],player_1 [4]);
                    player_1.splice(0,5);
                    alert("Победил 2 игрок");
               //     delete player_1 [0,1,2,3,4,5,6,7];
               z=0;
                }
                else if (player_2.length<5){
                    player_1.push(player_2 [0],player_2 [1],player_2 [2],player_2 [3],player_2 [4]);
                    player_2.splice(0,5);
                    alert("Победил 1 игрок");
              //      delete player_2 [0,1,2,3,4,5,6,7];
              z=0;
                }
            else if (player_1 [4] = player_2 [4]){
                if (player_1 [6] > player_2 [6]){
                    player_1.push(player_2 [0],player_2 [1],player_2 [2],player_2 [3],player_2 [4],player_2 [5],player_2 [6]);
                    player_1.push(player_1 [0],player_1 [1],player_1 [2],player_1 [3],player_1 [4],player_1 [5],player_1 [6]);
                    player_2.splice(0,7);
                    player_1.splice(0,7);
            }
                else if (player_1 [4] < player_2 [4]){
                    player_2.push(player_1 [0],player_1 [1],player_1 [2],player_1 [3],player_1 [4],player_1 [5],player_1 [6]);
                    player_2.push(player_2 [0],player_2 [1],player_2 [2],player_2 [3],player_2 [4],player_2 [5],player_2 [6]);
                    player_1.splice(0,7);
                    player_2.splice(0,7);
                }
                else if (player_1.length<7){
                    player_2.push(player_1 [0],player_1 [1],player_1 [2],player_1 [3],player_1 [4],player_1 [5],player_1 [6]);
                    player_1.splice(0,7);
                    alert("Победил 2 игрок");
            //        delete player_1 [0,1,2,3,4,5,6,7];
            z=0;  
                }
                else if (player_2.length<7){
                    player_1.push(player_2 [0],player_2 [1],player_2 [2],player_2 [3],player_2 [4],player_2 [5],player_2 [6]);
                    player_2.splice(0,5);
                    alert("Победил 1 игрок");
          //          delete player_2 [0,1,2,3,4,5,6,7];
          z=0; 
                }
            };
        };
    };
z--;
//console.log(player_1)
//console.log(player_2)
console.log(z)
console.log(player_1.length)
console.log(player_2.length)
};
console.log(player_2)
console.log(player_1)


var p3=10
var p4=2
while (p3>0 && p4>0) {
p4--;
};