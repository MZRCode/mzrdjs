module.exports = {
    tdk: async function (kelime) {
        const mesaj = kelime.toLocaleLowerCase();
        const ilkHarf = mesaj.charAt(0);
        const sonHarf = mesaj.charAt(mesaj.length - 1);
        const kontrol = mesaj.split(' ');
        const query = encodeURI(mesaj);

        try {
            const response = await fetch(`https://sozluk.gov.tr/gts?ara=${query}`);
            const veri = await response.json();

            if (mesaj.length > 70) {
                return {
                    onay: false,
                    kelime: kelime,
                    ilkHarf: ilkHarf,
                    sonHarf: sonHarf,
                    lisan: null,
                    anlam: null,
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
                    anlam: null,
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
                    anlam: null,
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
                    anlam: null,
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
                            lisan: null,
                            anlam: veri[0].anlamlarListe[0].anlam
                        }
                    } else {
                        return {
                            onay: true,
                            not: null,
                            kelime: mesaj,
                            ilkHarf: ilkHarf,
                            sonHarf: sonHarf,
                            lisan: 'Türkçe',
                            anlam: veri[0].anlamlarListe[0].anlam
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
                            lisan: null,
                            anlam: veri[0].anlamlarListe[0].anlamlarListe[0].anlam
                        };

                    } else {
                        return {
                            onay: true,
                            not: null,
                            kelime: mesaj,
                            ilkHarf: ilkHarf,
                            sonHarf: sonHarf,
                            lisan: 'Türkçe',
                            anlam: veri[0].anlamlarListe[0].anlamlarListe[0].anlam
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
                            lisan: veri[0].lisan,
                            anlam: veri[0].anlamlarListe[0].anlam
                        };

                    } else if (veri[0].lisan && veri[0].lisan.includes('Fransızca')) {

                        return {
                            onay: true,
                            not: null,
                            kelime: mesaj,
                            ilkHarf: ilkHarf,
                            sonHarf: sonHarf,
                            lisan: veri[0].lisan,
                            anlam: veri[0].anlamlarListe[0].anlam
                        };

                    } else if (veri[0].lisan && veri[0].lisan.includes('Arapça')) {

                        return {
                            onay: true,
                            not: null,
                            kelime: mesaj,
                            ilkHarf: ilkHarf,
                            sonHarf: sonHarf,
                            lisan: veri[0].lisan,
                            anlam: veri[0].anlamlarListe[0].anlam
                        };

                    } else if (veri[0].lisan && veri[0].lisan.includes('İngilizce')) {

                        return {
                            onay: true,
                            not: null,
                            kelime: mesaj,
                            ilkHarf: ilkHarf,
                            sonHarf: sonHarf,
                            lisan: veri[0].lisan,
                            anlam: veri[0].anlamlarListe[0].anlam
                        };
                    } else if (veri[0].lisan && veri[0].lisan.includes('Çince')) {

                        return {
                            onay: true,
                            not: null,
                            kelime: mesaj,
                            ilkHarf: ilkHarf,
                            sonHarf: sonHarf,
                            lisan: veri[0].lisan,
                            anlam: veri[0].anlamlarListe[0].anlam
                        };
                    } else {
                        return {
                            onay: false,
                            kelime: kelime,
                            ilkHarf: ilkHarf,
                            sonHarf: sonHarf,
                            not: 'Kelimenin kökeni Türkçe değil',
                            lisan: veri[0].lisan,
                            anlam: veri[0].anlamlarListe[0].anlam
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
                    anlam: null,
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
                anlam: null,
                not: 'Bir problem çıktı ve TDK\'den veri çekemiyorum'
            };
        }
    },
};
