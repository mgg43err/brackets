module.exports = function check(str, brackets) {
        if (arguments.length === 2) {
            if (str.length % 2 === 0) {
                let re = /[^A-Z0-9]/i;
                if (re.test(str) === true) {
                    let stack = [];
                    brackets = brackets.flat().join().split(',').join('');
                    console.log(brackets);
                    if (brackets.includes('||')) {
                        brackets = brackets.replace('||', '|');
                    }
                    console.log(brackets);

                    for (let bracket of str) {
                        if (bracket !== '|') {
                            let bracketsIndex = brackets.indexOf(bracket);
                            if (bracketsIndex === -1) {
                                continue
                            }
                            if (bracketsIndex % 2 === 0) {
                                stack.push(bracketsIndex + 1)
                            } else {
                                if (stack.pop() !== bracketsIndex) {
                                    console.log('fff');
                                    return false;
                                }
                            }
                        }
                        if (bracket === '|') {
                            let bracketIndex = brackets.indexOf(bracket);
                            console.log(bracketIndex);
                            if (bracketIndex === -1) {
                                continue
                            }
                            if (bracketIndex % 2 === 0) {
                                stack.push(bracketIndex + 1);
                            } else {
                                if (stack.pop() !== bracketIndex + 1) {
                                    console.log('rgr');
                                    return false;
                                }
                            }
                        }
                    }
                    console.log(stack.length === 0);
                    return stack.length === 0;
                } else {
                    console.log('false3');
                    return false;
                }
            } else {
                console.log('false2');
                return false;
            }

        } else {
            console.log('false1');
            return false;
        }


    }
    /* 
    check('||', [
        ['|', '|']
    ]);
     */
    /* let isBalanced = (input) => {

        let brackets = "[]{}()<>|"
        let stack = []

        for (let bracket of input) {

           
        }
        console.log(stack.length === 0);
    }
    isBalanced('||'); */