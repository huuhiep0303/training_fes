// // lấy ra phần tử trong js
// document.createElement("div");
// tạo ra 1 node mới 

// document.querySelector('.diva')
// // kiểu tóm gọn, trả về 1 phần tử đầu tiền trùng khớp dựa trên tham số truyền vào

// document.querySelectorAll('.diva')
// // trả về tất cả phần tử: nodelist

// document.getElementById()
// // trả về 1 phần tử duy nhất

// document.getElementsByClassName()
// // trả về node có chứa trên class
// const tagName = getElementsByClassName('div')
// console.log(tagName)
// // dựa trên tên class: htmlcollection 

// document.getElementsByName()
// // trả về danh sách dựa trên name hoặc id 

// document.getElementsByTagName('div')
// // -> trả về thẻ có sẵn trong html

const pokemon = [
    {
        name: 'bulbasaur',
        image: 'link'
    },
    {
        name: 'bulbasaur',
        image: 'link'
    },
    {
        name: 'bulbasaur',
        image: 'link'
    }
]


function changeName() {
    const nameDiv = document.querySelector('.pokemon-name')
    nameDiv.innerText = 'Pikachu' // chèn dang text
    nameDiv.innerText = '<p>Pikachu</p>' // html trong html
    console.log(nameDiv)
    nameDiv.remove // delete 
    nameDiv.innerHTML = '<p>' + Name + '</p>' // chèn dạng html

}

function changeImage() {
    const imageDiv = document.querySelector('img')
    imageDiv.src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png'
    console.log(imageDiv)
}


// btvn: bấm nút thì đổi hình đổi tên, phần tử cuối thì chạy lên phần tử đầu tiên 