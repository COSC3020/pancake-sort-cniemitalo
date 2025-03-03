# Pancake Sort

There is an abstract data type (ADT) called a *pancake array*, which provides
the function `flip(array, n)`, which takes the top (first) $n$ items in the
array and "flips them over", i.e. reverses their order.

For example, if you called `flip([1, 2, 3, 4], 2)`, the result would
be the array  `[2, 1, 3, 4]`, because the order of the (first) top 2
elements in the array has been reversed.

If $n$ is larger than the number of items in the array, the entire array gets
reversed. The intuition for the name "pancake array" is that with a stack of
pancakes, you can insert a spatula at any point in the stack and use it to flip
over all pancakes above that point.

Implement a sorting function that will sort an array of pancakes such that the
smallest pancake is at the top. You may use only the `flip()` function to
manipulate the array. You may break ties arbitrarily. Test your new function;
I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`, but it only tests
`pancakeSort()`, not `flip()`.

Hint: Start by thinking about the calls to `flip()` required to move a *single*
element into its correct position.

## Runtime Analysis

What is the asymptotic runtime ($\Theta$) of your algorithm in terms of the
number of comparisons of pancakes? What is it in terms of the number of flips?
Add your answer to this markdown file.

## My Answer

The asymptotic runtime for the number of comparisions of pancakes would be 
$\Theta(n)$ in the best case because it would only need to check that every element is in it's correct place, which they all would be. It would be $\Theta(n^2)$ for the worst case....


I think the asymptotic runtime complexity of my algorithm in terms of flips would
be none for the best case, in which it's already sorted so there would be no need
to do any flips. And in the worst case, it would be $\Theta(n)$. The maximum number of flips would be 2 for every element, making it a linear number of flips. 

## Sources and Plagiarism 

https://www.geeksforgeeks.org/pancake-sorting/, used this to change to sort back to front instead of front to back, as well as determine maximum index 

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.

