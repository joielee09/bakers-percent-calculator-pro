import axios from 'axios';

const headers={
    'x-api-key': 'VdlzJiifdv5h43Hs5dRh881dWVPFjzsQ1U3D1cH5',
    'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'Accept': '*/*',
    'Connection': 'keep-alive'
    }

// GET
export const getPublicRecipeData = async () => {
    try {
        const result = await axios.get(
            `https://fbo2vnjyz6.execute-api.ap-northeast-2.amazonaws.com/baker_stage/get_public_recipe`,
            {headers}
        )
        return result.data
    }
    catch (e) {
        console.log(e);
    }
}

// POST
export const getPrivateRecipe = async (USER_ID) => {
try {
        const data={
            "USER_ID":USER_ID
        }
        const result = await axios.post(
            `https://fbo2vnjyz6.execute-api.ap-northeast-2.amazonaws.com/baker_stage/get_private_recipe`,
            data,
            {headers},
        )
        return result.data
    }
    catch (e) {
        console.log(e);
    }
}

/* ITEM format */
/* 
    {
        "IMAGE": "https://lh3.googleusercontent.com/proxy/B_WUq19ore-Azvf-Moglr0uWzvEn_22UE1bpMyh4-T47LAKVtJsPLbQTMvHNJZeJqt3jFKJuwCQ7g3TWXoSFonfnMoGaJxYbo4w4O0DJDZuXRHgN23Q",
        "PUBLIC": true,
        "RATING": 4,
        "RECIPE_ID": 13,
        "REVIEW": "룰루 랄라! 씹을수록 맛이 더해지는 빵에서 식감이 차지하는 부분은 정말 큰 것 같아요. 우물우물 씹는 재미가 있는 빵을 찾으시는 분이라면 치즈 치아바타는 어떨까요? 겉은 바삭하고 속은 쫄깃쫄깃한데, 씹을수록 고소하고 담백한 재미있는 빵이랍니다.",
        "TITLE": "치아바타",
        "TRAY": [
            {
                "flourInput": true,
                "inputGram": 1000,
                "inputName": "강력분",
                "percentage": 100,
                "targetGram": 0
            },
            {
                "inputGram": 450,
                "inputName": "계란",
                "percentage": 45,
                "targetGram": 0
            },
            {
                "inputGram": 700,
                "inputName": "스파게티",
                "percentage": 70,
                "targetGram": 0
            },
            {
                "flag": true,
                "flourInput": false,
                "inputGram": 1000,
                "inputName": "flour",
                "percentage": 100,
                "targetGram": 0
            }
        ],
        "USER_ID":3,
        "AUTHOR": "프랑스참새", (localStorage의 정보 넣기)
        "LIKES": 0
    }
*/

// POST
export const makePrivateRecipe = async (ITEM) => {
    try {
            const data={
                "item":ITEM
            }
            const result = await axios.post(
                `https://fbo2vnjyz6.execute-api.ap-northeast-2.amazonaws.com/baker_stage/make-recipe`,
                data,
                {headers},
            )
            return result.data
        }
    catch (e) {
        console.log(e);
    }
}

export const makePublicRecipe = async (ITEM) => {
    try {
            const data={
                "item":ITEM
            }
            const result = await axios.post(
                `https://fbo2vnjyz6.execute-api.ap-northeast-2.amazonaws.com/baker_stage/make-public-recipe`,
                data,
                {headers},
            )
            return result.data
        }
    catch (e) {
        console.log(e);
    }
}

// DELETE
