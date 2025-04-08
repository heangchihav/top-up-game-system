import { ImageSourcePropType } from "react-native";


export type ImageSliderType = {
    title: string;
    image: string;
    description: string;
}

export const ImageSlider = [
    {

        title: 'Image 1',
        description: 'Description of Image 1',
        image: "https://vibolshop.com/public/image/7aquzis-300h.webp",
    },
    {

        title: 'Image 2',
        description: 'Description of Image 2',
        image: "https://imgs.search.brave.com/B3kEOWynVmJhRDPXD4hLBAIZ9eveDGADM2Dh6oUbhbM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9maXZl/cnItcmVzLmNsb3Vk/aW5hcnkuY29tL2lt/YWdlcy90X21haW4x/LHFfYXV0byxmX2F1/dG8scV9hdXRvLGZf/YXV0by9naWdzLzE3/MzY4NDMwNi9vcmln/aW5hbC84NGUxN2Nj/MDU1ZDcyZWE2OTAw/NjdiZDQ1Y2E2Mjgw/YzkwNDk1NmQxL2Ny/ZWF0ZS10aGUtcHJv/ZmVzc2lvbmFsLWJh/bm5lci5qcGc",
    },
    {

        title: 'Image 3',
        description: 'Description of Image 2',
        image: "https://imgs.search.brave.com/_8-PcK1U-Qp-fkOf4ljfUhX0wlmrkV3cV99b4ODfYIk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtd2l4bXAtZWQz/MGE4NmI4YzRjYTg4/Nzc3MzU5NGMyLndp/eG1wLmNvbS9mL2Y0/N2E5YTM0LWNkNjEt/NDM0NS1iZGRmLTEy/ZmU0ZGYzZDZhZS9k/ZDZhNTdxLWY4ZjQw/NzZmLTRiOWEtNDUw/ZS1hZjNkLTUyMmFj/NDEwYjllZC5wbmc_/dG9rZW49ZXlKMGVY/QWlPaUpLVjFRaUxD/SmhiR2NpT2lKSVV6/STFOaUo5LmV5Snpk/V0lpT2lKMWNtNDZZ/WEJ3T2pkbE1HUXhP/RGc1T0RJeU5qUXpO/ek5oTldZd1pEUXhO/V1ZoTUdReU5tVXdJ/aXdpYVhOeklqb2lk/WEp1T21Gd2NEbzNa/VEJrTVRnNE9UZ3lN/alkwTXpjellUVm1N/R1EwTVRWbFlUQmtN/alpsTUNJc0ltOWlh/aUk2VzF0N0luQmhk/R2dpT2lKY0wyWmNM/MlkwTjJFNVlUTTBM/V05rTmpFdE5ETTBO/UzFpWkdSbUxURXla/bVUwWkdZelpEWmha/Vnd2WkdRMllUVTNj/UzFtT0dZME1EYzJa/aTAwWWpsaExUUTFN/R1V0WVdZelpDMDFN/akpoWXpReE1HSTVa/V1F1Y0c1bkluMWRY/U3dpWVhWa0lqcGJJ/blZ5YmpwelpYSjJh/V05sT21acGJHVXVa/RzkzYm14dllXUWlY/WDAuaDMxTDUyU0xy/X2oxdjM0TG54M1Vj/dlU0SWQ4MUNiSEdJ/YV90YmwxR2laRQ",
    },
    {

        title: 'Image 4',
        description: 'Description of Image 2',
        image: "https://imgs.search.brave.com/myRlyeo1SMG9eh-F1WLiw2GBuMnrx-DLMak6WjVPJiM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtd2l4bXAtZWQz/MGE4NmI4YzRjYTg4/Nzc3MzU5NGMyLndp/eG1wLmNvbS9mL2Y0/N2E5YTM0LWNkNjEt/NDM0NS1iZGRmLTEy/ZmU0ZGYzZDZhZS9k/ZDl1amRpLTQ5OTE1/MDIzLWUzZDctNDVk/OS1iNmQ1LTFkZDNh/M2M4ZGRjYS5wbmc_/dG9rZW49ZXlKMGVY/QWlPaUpLVjFRaUxD/SmhiR2NpT2lKSVV6/STFOaUo5LmV5Snpk/V0lpT2lKMWNtNDZZ/WEJ3T2pkbE1HUXhP/RGc1T0RJeU5qUXpO/ek5oTldZd1pEUXhO/V1ZoTUdReU5tVXdJ/aXdpYVhOeklqb2lk/WEp1T21Gd2NEbzNa/VEJrTVRnNE9UZ3lN/alkwTXpjellUVm1N/R1EwTVRWbFlUQmtN/alpsTUNJc0ltOWlh/aUk2VzF0N0luQmhk/R2dpT2lKY0wyWmNM/MlkwTjJFNVlUTTBM/V05rTmpFdE5ETTBO/UzFpWkdSbUxURXla/bVUwWkdZelpEWmha/Vnd2WkdRNWRXcGth/UzAwT1RreE5UQXlN/eTFsTTJRM0xUUTFa/RGt0WWpaa05TMHha/R1F6WVROak9HUmtZ/MkV1Y0c1bkluMWRY/U3dpWVhWa0lqcGJJ/blZ5YmpwelpYSjJh/V05sT21acGJHVXVa/RzkzYm14dllXUWlY/WDAuSU1WelNKbER1/Nml6dnRDLXdGOTdX/cDZOMkZvSzltMFc3/REdOOEIyQTNNRQ",
    },
]