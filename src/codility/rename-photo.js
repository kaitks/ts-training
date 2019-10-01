/* eslint-disable prefer-spread */
function pad(width, string, padding) {
    return width <= string.length
        ? string
        : pad(width, padding + string, padding);
}

function solution(S) {
    const photoStringList = S.split("\n");
    const photos = photoStringList.map(photoString => photoString.split(", "));
    const photoWithIndexList = photos.map((photo, index) => ({
        index,
        name: photo[0],
        ext: photo[0].split(".")[1],
        city: photo[1],
        date: photo[2],
    }));
    const photoByCity = {};
    photoWithIndexList.forEach(photo => {
        if (!photoByCity[photo.city]) {
            photoByCity[photo.city] = [photo];
        } else {
            photoByCity[photo.city] = photoByCity[photo.city].concat([photo]);
        }
    });
    const sortedPhotoByCityList = Object.entries(photoByCity).map(
        ([city, photoList]) => {
            photoList.sort((photoA, photoB) => {
                if (photoA.date > photoB.date) return 1;
                if (photoA.date === photoB.date) return 0;
                return -1;
            });
            const photoListLength = photoList.length;
            const padCount = photoListLength.toString().split("").length;
            const photoWithNameList = photoList.map((photo, i) => ({
                name: `${city + pad(padCount, (i + 1).toString(), "0")}.${
                    photo.ext
                }`,
                index: photo.index,
            }));
            return photoWithNameList;
        }
    );

    const flattenPhotoList = [].concat.apply([], sortedPhotoByCityList);
    return flattenPhotoList
        .sort((photoA, photoB) => {
            if (photoA.index > photoB.index) return 1;
            if (photoA.index === photoB.index) return 0;
            return -1;
        })
        .map(photo => photo.name)
        .join("\n");
    // write your code in JavaScript (Node.js 8.9.4)
}

const input = `photo.jpg, Warsaw, 2013-09-05 14:08:15
john.png, London, 2015-06-20 15:13:22
myFriends.png, Warsaw, 2013-09-05 14:07:13
Eiffel.jpg, Paris, 2015-07-23 08:03:02
pisatower.jpg, Paris, 2015-07-22 23:59:59
BOB.jpg, London, 2015-08-05 00:02:03
notredame.png, Paris, 2015-09-01 12:00:00
me.jpg, Warsaw, 2013-09-06 15:40:22
a.png, Warsaw, 2016-02-13 13:33:50
b.jpg, Warsaw, 2016-01-02 15:12:22
c.jpg, Warsaw, 2016-01-02 14:34:30
d.jpg, Warsaw, 2016-01-02 15:15:01
e.png, Warsaw, 2016-01-02 09:49:09
f.png, Warsaw, 2016-01-02 10:55:32
g.jpg, Warsaw, 2016-02-29 22:13:11`;

const result = solution(input);
console.log(result);
