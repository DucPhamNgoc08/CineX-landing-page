document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            // Kiểm tra xem đã có phần trả lời chưa
            const nextElement = this.nextElementSibling;
            
            if (nextElement && nextElement.classList.contains('faq-answer')) {
                // Đã có phần trả lời, toggle hiển thị
                nextElement.classList.toggle('active');
                this.classList.toggle('active');
            } else {
                // Tạo phần trả lời mới
                const answer = document.createElement('div');
                answer.classList.add('faq-answer');
                
                // Thêm nội dung tùy theo câu hỏi
                switch(this.textContent.trim().replace('+', '')) {
                    case 'CineX là gì và làm thế nào để xem?':
                        answer.textContent = 'CineX là dịch vụ xem phim và series trực tuyến với hàng ngàn bộ phim, chương trình TV, anime, phim tài liệu từ nhiều thể loại và ngôn ngữ. Bạn có thể xem CineX trên mọi thiết bị thông qua ứng dụng hoặc website.';
                        break;
                    case 'Tôi có thể xem ở đâu?':
                        answer.textContent = 'Bạn có thể xem CineX trên mọi thiết bị có kết nối internet như Smart TV, máy tính, máy tính bảng, điện thoại thông minh và nhiều thiết bị khác.';
                        break;
                    case 'Tôi có thể xem gì trên CineX?':
                        answer.textContent = 'CineX cung cấp thư viện phong phú với hàng ngàn bộ phim, series, anime, phim tài liệu và nhiều nội dung khác. Nội dung được cập nhật thường xuyên với các tựa phim mới nhất.';
                        break;
                    default:
                        answer.textContent = 'Thông tin chi tiết sẽ được cập nhật sớm.';
                }
                
                // Chèn phần trả lời vào sau câu hỏi
                this.parentNode.insertBefore(answer, this.nextSibling);
                this.classList.add('active');
                answer.classList.add('active');
            }
        });
    });

    const style = document.createElement('style');
    style.textContent = `
        .faq-answer {
            color: #ffffff;
            background-color: rgb(30, 30, 30);
            padding: 0;
            max-height: 0;
            overflow: hidden;
            transition: all 0.5s ease-out;
            margin-bottom: 10px;
            border-radius: 0 0 5px 5px;
            font-size: 16px;
            line-height: 1.5;
            opacity: 0;
        }
        
        .faq-answer.active {
            padding: 20px;
            max-height: 300px;
            opacity: 1;
        }
        
        .faq-question {
            position: relative;
            border-radius: 5px;
            background-color: #1D1D1D;
            transition: all 0.3s ease;
            padding-right: 40px; /* Chỗ trống cho biểu tượng */
        }
        
        .faq-question.active {
            border-radius: 5px 5px 0 0;
            background-color: #3D3D3D;
        }
        
        .faq-icon {
            position: absolute;
            right: 20px;
            top: 50%;
            transform: translateY(-50%);
            font-size: 20px;
            font-weight: 300;
            color: #e50914;
            transition: all 0.3s ease;
        }
        
        .faq-question:hover {
            background-color: #2D2D2D;
        }
        
        .faq-question:hover .faq-icon {
            transform: translateY(-50%) scale(1.2);
        }
    `;
    document.head.appendChild(style);
}); 