// 测试 \s, 匹配不可见字符
const str1 = ` gd3 
g\n gd\f`

console.log(str1.replace(/\s/g, '')) // 去除不可见字符

// 测试 \b，匹配一个单词边界的位置
const str2 = `A    regular expression  (shortened as   regex or regexp;[1] also referred to as rational  expression[2][3]) is a sequence of    characters that define a search pattern. `

// 把每个单词首字母换成大写
console.log(str2.replace(/\b[a-z]/g, l => l.toUpperCase()))

// 把每个单词中间的空格用-连起来
console.log(str2.replace(/\s+/g, '-'))
