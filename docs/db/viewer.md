//用法1

view("pi4p2nm5t8w2421").then((res) => {
if (res) {
console.log(res.id);
} else {
console.log('未获取到有效数据');
}
}).catch((error) => {
console.error('Error:', error);
});
})
}
}
})

