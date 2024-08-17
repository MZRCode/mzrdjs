module.exports = {
    tdk: async function (kelime) {
        const axios = require('axios');

        const mesaj = kelime.toLocaleLowerCase();
        const ilkHarf = mesaj.charAt(0);
        const sonHarf = mesaj.charAt(mesaj.length - 1);
        const kontrol = mesaj.split(' ');
        const query = encodeURI(mesaj);

        try {
            const response = await axios.get(`https://sozluk.gov.tr/gts?ara=${query}`);
            const veri = response.data;

            if (mesaj.length > 70) {
                return {
                    onay: false,
                    kelime: kelime,
                    ilkHarf: ilkHarf,
                    sonHarf: sonHarf,
                    lisan: null,
                    not: 'Türkçede kullanılmış en uzun cüme 70 harflidir'
                };
            };

            if (kontrol.length > 1) {
                return {
                    onay: false,
                    kelime: kelime,
                    ilkHarf: ilkHarf,
                    sonHarf: sonHarf,
                    lisan: null,
                    not: 'Kelime boşluk içeriyor',
                };
            };

            if (mesaj.length < 2) {
                return {
                    onay: false,
                    kelime: kelime,
                    ilkHarf: ilkHarf,
                    sonHarf: sonHarf,
                    lisan: null,
                    not: 'Kelime 1 harf ya da 1 harften küçük olamaz',
                };
            };

            if (['.', ',', '-', '_', '*', '!', '\'', '^', '#', '$', '+', '%', '&', '/', '=', '?', ';', ':', '<', '>', '|', '`', '"'].includes(ilkHarf)) {
                return {
                    onay: false,
                    kelime: kelime,
                    ilkHarf: ilkHarf,
                    sonHarf: sonHarf,
                    lisan: null,
                    not: 'Kelimenin başında bir sembol var',
                };
            };

            if (veri[0]) {
                const sayı = kelime.length - 1

                if (!veri[0].lisan) {
                    if (kelime[sayı] === "ğ") {
                        return {
                            onay: true,
                            not: "Son harf Ğ olduğundan dolayı oyun bitti",
                            kelime: kelime,
                            ilkHarf: ilkHarf,
                            sonHarf: sonHarf,
                            lisan: null
                        }
                    } else {
                        return {
                            onay: true,
                            not: null,
                            kelime: mesaj,
                            ilkHarf: ilkHarf,
                            sonHarf: sonHarf,
                            lisan: 'Türkçe'
                        };
                    }
                }

                let yeniLisan = veri[0].lisan.indexOf('Türkçe');

                if (yeniLisan > -1) {
                    onay = true

                    if (kelime[sayı] === 'ğ') {
                        return {
                            onay: onay,
                            not: 'Son harf Ğ olduğundan dolayı oyun bitti',
                            kelime: kelime,
                            ilkHarf: ilkHarf,
                            sonHarf: sonHarf,
                            lisan: null
                        };

                    } else {
                        return {
                            onay: true,
                            not: null,
                            kelime: mesaj,
                            ilkHarf: ilkHarf,
                            sonHarf: sonHarf,
                            lisan: 'Türkçe'
                        };
                    };
                }

                if (yeniLisan === -1) {
                    if (veri[0].lisan && veri[0].lisan.includes('Farsça')) {

                        return {
                            onay: true,
                            not: null,
                            kelime: mesaj,
                            ilkHarf: ilkHarf,
                            sonHarf: sonHarf,
                            lisan: veri[0].lisan
                        };

                    } else if (veri[0].lisan && veri[0].lisan.includes('Fransızca')) {

                        return {
                            onay: true,
                            not: null,
                            kelime: mesaj,
                            ilkHarf: ilkHarf,
                            sonHarf: sonHarf,
                            lisan: veri[0].lisan
                        };

                    } else if (veri[0].lisan && veri[0].lisan.includes('Arapça')) {

                        return {
                            onay: true,
                            not: null,
                            kelime: mesaj,
                            ilkHarf: ilkHarf,
                            sonHarf: sonHarf,
                            lisan: veri[0].lisan
                        };

                    } else if (veri[0].lisan && veri[0].lisan.includes('İngilizce')) {

                        return {
                            onay: true,
                            not: null,
                            kelime: mesaj,
                            ilkHarf: ilkHarf,
                            sonHarf: sonHarf,
                            lisan: veri[0].lisan
                        };
                    } else if (veri[0].lisan && veri[0].lisan.includes('Çince')) {

                        return {
                            onay: true,
                            not: null,
                            kelime: mesaj,
                            ilkHarf: ilkHarf,
                            sonHarf: sonHarf,
                            lisan: veri[0].lisan
                        };
                    } else {
                        return {
                            onay: false,
                            kelime: kelime,
                            ilkHarf: ilkHarf,
                            sonHarf: sonHarf,
                            not: 'Kelimenin kökeni Türkçe değil',
                            lisan: veri[0].lisan
                        };
                    }
                }
            }

            if (veri.error) {
                onay = false

                return {
                    onay: onay,
                    kelime: kelime,
                    ilkHarf: ilkHarf,
                    sonHarf: sonHarf,
                    lisan: null,
                    not: 'TDK\'de böyle bir kelime bulunmuyor'
                };
            };
        } catch (error) {
            console.error(error);
            return {
                onay: false,
                kelime: kelime,
                ilkHarf: ilkHarf,
                sonHarf: sonHarf,
                lisan: null,
                not: 'Bir problem çıktı ve TDK\'den veri çekemiyorum'
            };
        }
    },
};