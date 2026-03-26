// API_GET_Request

const axios = require('axios');
const { expect } = require('chai');

describe('ReqRes API Automation Test', () => {
    const BASE_URL = 'https://reqres.in/api';
    const USER_ID = 12;
    const NOT_FOUND_ID = 1234;
    const API_KEY = 'reqres_08e5169911f643a693339770b8d658f7'; 

    // ตัวอย่าง header 
    const headers = {
        'x-api-key': API_KEY ,
    };

    it('Get user profile success - ควรดึงข้อมูลผู้ใช้ ID 12 สำเร็จ', async () => {
        try {
            const response = await axios.get(`${BASE_URL}/users/${USER_ID}`, { headers });
            
            // ตรวจสอบ Status Code 200
            expect(response.status).to.equal(200);
            const userData = response.data.data;
            
            // ตรวจสอบข้อมูลใน JSON (Assertion)
            expect(userData.id).to.equal(USER_ID);
            expect(userData.email).to.equal('rachel.howell@reqres.in');
            expect(userData.first_name).to.equal('Rachel');
            expect(userData.last_name).to.equal('Howell');
            expect(userData.avatar).to.include('12-image.jpg');

            console.log('Test Passed: User 12 found');
        } catch (error) {
            throw new Error(`Failed with status ${error.response.status}: ${error.message}`);
        }
    });

    it('Get user profile but user not found - ควรได้ 404 เมื่อไม่พบผู้ใช้', async () => {
        try {
            await axios.get(`${BASE_URL}/users/${NOT_FOUND_ID}`, { headers });
        } catch (error) {
            // ตรวจสอบว่าต้อง Error ด้วยรหัส 404
            expect(error.response.status).to.equal(404);
            // ตรวจสอบว่า Body เป็น Object ว่าง {}
            expect(error.response.data).to.be.empty;
            console.log('Test Passed: User not found (404) as expected');
        }
    });
});
