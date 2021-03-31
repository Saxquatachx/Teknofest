
            function konumSorgula() {
                navigator.geolocation.getCurrentPosition(oldu, olmadi);
              }
              
              function oldu(pos) {  
                // https://www.google.com/maps?output=embed&q=40.989491199999996,29.104537600000004
                mapembed = `https://www.google.com/maps?output=embed&z=15&q=${pos.coords.latitude},${pos.coords.longitude}`;
                console.log(mapembed);
              
                document.getElementById('harita').setAttribute('src', mapembed);
              
                console.log(pos);
              }
              
              function olmadi(hata) {
                document.getElementById('durum_mesaj').innerHTML = `
              <strong>Hata Kodu</strong> ${hata.code} <br>
              <strong>Hata mesajı</strong> ${hata.message}
              `;
              
                console.log(hata);
              }

              async function hata() {
                document.getElementById("result").innerHTML = "Dediğiniz komutlarım arasında yer almıyor lütfen şunları deneyin: Neredeyim, Nereye Gidebilirim"
              }