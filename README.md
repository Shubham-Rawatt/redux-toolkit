## React Redux Toolkit

1. ##Store

Store pura global state hold karta hai.

RTK me store configureStore() se banaya jata hai.

Saare slices store ke andar combine hote hain.

2. ##State

State wo data hai jise app use karta hai (UI, user info, counters, lists, etc.).

Redux me state immutable hoti hai—har update ek new state banata hai.

3. ##Slice

Slice state ka ek logical piece hota hai (jaise userSlice, cartSlice).

Har slice ka apna name, initialState, aur reducers hote hain.

Slices Redux Toolkit’s createSlice() function se bante hain.

4. ##name

Slice ka unique identifier hota hai.

Isi name se actions ke type automatically generate hote hain (e.g. counter/increment).

5. ##initialState

Slice ka default ya starting state value.

App load hone par isi initial state se store start hota hai.

6. ##Reducer

Reducer ek pure function hota hai jo state ko update karta hai.

Ye action ke basis par decide karta hai state ka naya version kya hoga.

createSlice() reducers ke liye auto actions generate karta hai.

7. ##Actions

Actions simple objects hote hain jo batate hain kya change karna hai.

RTK me actions createSlice() se automatically bante hain.

Example: increment(), addTodo(payload).

8. ##Dispatch

Dispatch function hota hai jo action ko trigger karta hai.

Example: dispatch(increment()) state update start karta hai.

9. ##createSlice()

Redux Toolkit ka main function jisse slice banta hai.

Ye automatically reducers + actions create karta hai.

Boilerplate bahut kam ho jata hai.

10. ##Working Flow

createSlice() → slice banata hai (name + initialState + reducers + actions).

configureStore() → slices ko combine karke store banata hai.

UI me se dispatch(action) hota hai.

Reducer state update karta hai.

Updated state UI ko re-render kara deti hai.
