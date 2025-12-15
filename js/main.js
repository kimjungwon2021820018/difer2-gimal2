function applyBlurEffects() {
  // 모든 symptom-card에 블러 효과 적용
  const symptomCards = document.querySelectorAll(".symptom-image-placeholder");
  symptomCards.forEach((card) => {
    card.style.backdropFilter = "blur(20px)";
    card.style.webkitBackdropFilter = "blur(20px)";
  });

  // 결과 화면의 카드들에 블러 효과 적용
  const resultCards = document.querySelectorAll(".result-card");
  resultCards.forEach((card) => {
    card.style.backdropFilter = "blur(30px)";
    card.style.webkitBackdropFilter = "blur(30px)";
  });

  // products-screen에 블러 효과 적용
  const productsScreen = document.querySelector(".products-screen");
  if (productsScreen) {
    // productsScreen.style.backdropFilter = "blur(15px)";
    //productsScreen.style.webkitBackdropFilter = "blur(15px)";
  }

  // detail-screen에 블러 효과 적용
  const detailScreen = document.querySelector(".detail-screen");
  if (detailScreen) {
    detailScreen.style.backdropFilter = "blur(15px)";
    detailScreen.style.webkitBackdropFilter = "blur(15px)";
  }

  // 컨테이너에 블러 효과 적용
  const containers = document.querySelectorAll("detail-content");
  containers.forEach((container) => {
    container.style.backdropFilter = "blur(10px)";
    container.style.webkitBackdropFilter = "blur(10px)";
  });

  // back-btn에 블러 효과 적용
  const backButtons = document.querySelectorAll(".back-btn");
  backButtons.forEach((btn) => {
    btn.style.backdropFilter = "blur(15px)";
    btn.style.webkitBackdropFilter = "blur(15px)";
  });

  // confirm-btn에 블러 효과 적용
  const confirmBtn = document.querySelector(".confirm-btn");
  if (confirmBtn) {
    confirmBtn.style.backdropFilter = "blur(15px)";
    confirmBtn.style.webkitBackdropFilter = "blur(15px)";
  }
}
// ====================================
// 영양제별 배경 이미지
// ====================================
const supplementBackgrounds = {
  "vitamin-c": 'url("images/bg-vitamin-c.png")', // 비타민C 배경
  "vitamin-b": 'url("images/bg-vitamin-b.png")', // 비타민B 배경
  probiotics: 'url("images/bg-probiotics.png")', // 유산균 배경
  magnesium: 'url("images/bg-magnesium.png")', // 마그네슘 배경
  "vitamin-d": 'url("images/bg-vitamin-d.png")', // 비타민D 배경
  omega3: 'url("images/bg-omega3.png")', // 오메가3 배경
};

// ====================================
// 영양제별 알약 이미지
// ====================================
const supplementImages = {
  "vitamin-c": "images/vitamin-c.png", // 비타민C 이미지
  "vitamin-b": "images/vitamin-b.png", // 비타민B 이미지
  probiotics: "images/probiotics.png", // 유산균 이미지
  magnesium: "images/magnesium.png", // 마그네슘 이미지
  "vitamin-d": "images/vitamin-d.png", // 비타민D 이미지
  omega3: "images/omega3.png", // 오메가3 이미지
};
const supplementDetailImages = {
  "vitamin-c": "images/detail-vitamin-c.png", // 비타민C 상세 이미지
  "vitamin-b": "images/detail-vitamin-b.png", // 비타민B 상세 이미지
  probiotics: "images/detail-probiotics.png", // 유산균 상세 이미지
  magnesium: "images/detail-magnesium.png", // 마그네슘 상세 이미지
  "vitamin-d": "images/detail-vitamin-d.png", // 비타민D 상세 이미지
  omega3: "images/detail-omega3.png", // 오메가3 상세 이미지
};
// ====================================
// 영양제 데이터베이스
// ====================================
const supplementsDatabase = {
  피부트러블: [
    {
      id: "vitamin-c",
      name: "VITAMIN C",
      shortDesc: "항산화제로 피부 탄력과 면역력 증진",
      description:
        "비타민 C는 강력한 항산화제로 세포 손상을 막고 면역력을 높여 감염 회복을 돕는다. 콜라겐 합성을 촉진해 피부 탄력과 상처 치유에 중요하며, 철분 흡수를 도와 빈혈 예방에도 효과적이다. 스트레스와 피로 완화에 기여하고 심혈관 질환 예방에도 도움을 준다. 성인 하루 권장량은 약 100mg이며 과다 섭취 시 위장 불편이 생길 수 있다. 오렌지, 키위, 파프리카 등에 풍부하게 들어 있다.",
      dosage: "성인 하루 권장량: 약 100mg",
      precautions: "과다 섭취 시 위장 불편이 생길 수 있습니다.",
      richFoods: "오렌지, 키위, 파프리카, 브로콜리, 딸기",
    },
  ],
  피로: [
    {
      id: "vitamin-b",
      name: "VITAMIN B 복합체",
      shortDesc: "에너지 대사와 피로 회복",
      description:
        "비타민 B 복합체는 에너지 대사에 필수적인 영양소로 피로 회복과 신경 기능 유지에 중요합니다.",
      dosage: "제품별 권장량 확인",
      precautions: "과다 섭취 시 신경 손상이 있을 수 있습니다.",
      richFoods: "현미, 돼지고기, 계란, 우유, 생선",
    },
  ],
  소화불량: [
    {
      id: "probiotics",
      name: "PROBIOTICS (유산균)",
      shortDesc: "장 건강과 소화 기능 개선",
      description:
        "프로바이오틱스는 장내 유익균을 증가시켜 소화 기능을 개선하고 면역력을 높입니다.",
      dosage: "제품별 CFU 수 확인 (보통 10억~100억 CFU)",
      precautions: "면역력이 약한 경우 의사와 상담하세요.",
      richFoods: "요구르트, 김치, 된장, 청국장",
    },
  ],
  스트레스: [
    {
      id: "magnesium",
      name: "MAGNESIUM (마그네슘)",
      shortDesc: "신경 안정과 스트레스 완화",
      description:
        "마그네슘은 신경 전달과 근육 이완에 중요하며 스트레스 완화와 수면 개선에 도움을 줍니다.",
      dosage: "성인 하루 권장량: 남성 400mg, 여성 310mg",
      precautions: "과다 섭취 시 설사가 발생할 수 있습니다.",
      richFoods: "아몬드, 시금치, 바나나, 다크 초콜릿",
    },
  ],
  면역저하: [
    {
      id: "vitamin-d",
      name: "VITAMIN D",
      shortDesc: "뼈 건강과 면역 기능 강화",
      description:
        "비타민 D는 칼슘 흡수를 촉진하여 뼈 건강을 유지하고 면역 기능을 강화합니다.",
      dosage: "성인 하루 권장량: 600-800 IU",
      precautions: "과다 섭취 시 고칼슘혈증이 발생할 수 있습니다.",
      richFoods: "연어, 참치, 우유, 계란 노른자, 햇빛",
    },
  ],
  "여성/남성 건강": [
    {
      id: "omega3",
      name: "OMEGA-3",
      shortDesc: "심혈관 건강과 호르몬 균형",
      description:
        "오메가-3 지방산은 심혈관 건강을 지원하고 호르몬 균형에 도움을 줍니다.",
      dosage: "하루 1000-2000mg",
      precautions: "항응고제 복용 시 주의가 필요합니다.",
      richFoods: "연어, 고등어, 아마씨, 호두",
    },
  ],
};

// ====================================
// 전역 변수
// ====================================
let selectedSymptoms = [];
let recommendedSupplements = [];
let currentSlide = 0;

// ====================================
// DOM 요소
// ====================================
const splashScreen = document.getElementById("splash-screen");
const homeScreen = document.getElementById("home-screen");
const productsScreen = document.getElementById("products-screen");
const detailScreen = document.getElementById("detail-screen");
const symptomCards = document.querySelectorAll(".symptom-card");
const confirmBtn = document.getElementById("confirm-btn");
const backToHomeBtn = document.getElementById("back-to-home");
const backToProductsBtn = document.getElementById("back-to-products");
const sliderTrack = document.getElementById("slider-track");
const sliderPrev = document.getElementById("slider-prev");
const sliderNext = document.getElementById("slider-next");
const sliderDots = document.getElementById("slider-dots");
const sliderIndicator = document.getElementById("slider-indicator");
const detailContent = document.getElementById("detail-content");

// ====================================
// 스플래시 화면 로직
// ====================================
window.addEventListener("DOMContentLoaded", () => {
  // 스플래시 화면 표시
  splashScreen.classList.add("active");

  // 2초 후 홈 화면으로 전환
  setTimeout(() => {
    splashScreen.classList.add("fade-out");
    setTimeout(() => {
      splashScreen.style.display = "none";
      homeScreen.classList.add("active");
    }, 800); // fade-out 애니메이션 시간
  }, 2000);
});

// ====================================
// 증상 선택 로직
// ====================================
symptomCards.forEach((card) => {
  card.addEventListener("click", () => {
    const symptom = card.getAttribute("data-symptom");

    // 선택/해제 토글
    card.classList.toggle("selected");

    if (card.classList.contains("selected")) {
      // 증상 추가
      if (!selectedSymptoms.includes(symptom)) {
        selectedSymptoms.push(symptom);
      }
    } else {
      // 증상 제거
      selectedSymptoms = selectedSymptoms.filter((s) => s !== symptom);
    }

    // 로컬 스토리지에 저장
    localStorage.setItem("selectedSymptoms", JSON.stringify(selectedSymptoms));
  });
});

// ====================================
// 확인하러가기 버튼
// ====================================
confirmBtn.addEventListener("click", () => {
  if (selectedSymptoms.length === 0) {
    alert("최소 1개 이상의 증상을 선택해주세요.");
    return;
  }

  // 추천 영양제 생성
  generateRecommendations();

  // 화면 전환
  homeScreen.classList.remove("active");
  productsScreen.classList.add("active");

  // 첫 번째 영양제 배경 설정
  setTimeout(() => {
    updateBackground();
  }, 100);
});

// ====================================
// 추천 영양제 생성
// ====================================
function generateRecommendations() {
  recommendedSupplements = [];
  const supplementIds = new Set();

  // 선택된 증상에 따라 영양제 추천
  selectedSymptoms.forEach((symptom) => {
    if (supplementsDatabase[symptom]) {
      supplementsDatabase[symptom].forEach((supplement) => {
        if (!supplementIds.has(supplement.id)) {
          supplementIds.add(supplement.id);
          recommendedSupplements.push(supplement);
        }
      });
    }
  });

  // 추천 영양제 렌더링
  renderProducts();
}

// ====================================
// 추천 영양제 목록 렌더링 (3D 회전 캐러셀)
// ====================================
function renderProducts() {
  sliderTrack.innerHTML = "";
  sliderDots.innerHTML = "";
  currentSlide = 0;

  const totalSlides = recommendedSupplements.length;
  const angleStep = 360 / totalSlides;

  // 슬라이드 카드 생성
  recommendedSupplements.forEach((supplement, index) => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";
    if (index === 0) productCard.classList.add("active"); // 첫 번째 카드 활성화
    productCard.setAttribute("data-id", supplement.id);

    // 3D 회전 위치 계산
    const angle = angleStep * index;
    const radius = 400; // 회전 반경

    productCard.style.transform = `rotateY(${angle}deg) translateZ(${radius}px)`;

    // 알약 이미지 설정
    const supplementImage =
      supplementImages[supplement.id] ||
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&q=80";

    productCard.innerHTML = `
            <div class="product-image-placeholder">
                <img src="${supplementImage}" alt="${supplement.name}" class="product-image" />
            </div>
        `;

    // 클릭 이벤트
    productCard.addEventListener("click", () => {
      showDetail(supplement);
    });

    sliderTrack.appendChild(productCard);

    // 네비게이션 점 생성
    const dot = document.createElement("div");
    dot.className = "slider-dot";
    if (index === 0) dot.classList.add("active");
    dot.addEventListener("click", () => goToSlide(index));
    sliderDots.appendChild(dot);
  });

  // 초기 회전 설정
  updateCarouselRotation();

  // 인디케이터 업데이트
  updateIndicator();
  updateArrows();

  // 첫 번째 슬라이드 배경 설정
  updateBackground();
}

// ====================================
// 캐러셀 회전 업데이트
// ====================================
function updateCarouselRotation() {
  const totalSlides = recommendedSupplements.length;
  const angleStep = 360 / totalSlides;
  const currentAngle = -(angleStep * currentSlide);

  sliderTrack.style.transform = `rotateY(${currentAngle}deg)`;

  // 현재 활성 카드만 클릭 가능하도록 설정
  const cards = sliderTrack.querySelectorAll(".product-card");
  cards.forEach((card, index) => {
    if (index === currentSlide) {
      card.classList.add("active");
    } else {
      card.classList.remove("active");
    }
  });

  // 제품 정보 텍스트 업데이트
  updateProductInfo();
}

// ====================================
// 제품 정보 텍스트 업데이트
// ====================================
function updateProductInfo() {
  const productInfoText = document.getElementById("product-info-text");
  const currentSupplement = recommendedSupplements[currentSlide];

  if (productInfoText && currentSupplement) {
    const nameEl = productInfoText.querySelector(".product-name");
    const descEl = productInfoText.querySelector(".product-short-desc");

    if (nameEl) nameEl.textContent = currentSupplement.name;
    if (descEl) descEl.textContent = currentSupplement.shortDesc;
  }
}

// ====================================
// 슬라이더 이동 (3D 회전)
// ====================================
function goToSlide(index) {
  if (index < 0 || index >= recommendedSupplements.length) return;

  currentSlide = index;

  // 3D 캐러셀 회전
  updateCarouselRotation();

  // 점 네비게이션 업데이트
  document.querySelectorAll(".slider-dot").forEach((dot, i) => {
    dot.classList.toggle("active", i === currentSlide);
  });

  // 현재 영양제에 맞는 배경으로 변경
  updateBackground();

  updateIndicator();
  updateArrows();
}

// ====================================
// 배경 변경 함수
// ====================================
function updateBackground() {
  const currentSupplement = recommendedSupplements[currentSlide];
  const bgBlurLayer = document.getElementById("bg-blur-layer");

  if (currentSupplement && supplementBackgrounds[currentSupplement.id]) {
    const background = supplementBackgrounds[currentSupplement.id];

    // body와 블러 레이어 모두에 배경 적용
    document.body.style.background = background;
    if (bgBlurLayer) {
      bgBlurLayer.style.background = background;
    }

    // 화면 비율에 따라 contain 또는 cover 선택
    const aspectRatio = window.innerWidth / window.innerHeight;
    let bgSize;
    if (aspectRatio > 1.5) {
      // 가로로 긴 화면
      bgSize = "100% auto";
    } else if (aspectRatio < 0.7) {
      // 세로로 긴 화면
      bgSize = "auto 100%";
    } else {
      // 일반 화면
      bgSize = "cover";
    }

    document.body.style.backgroundSize = bgSize;
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.animation = "none";

    if (bgBlurLayer) {
      bgBlurLayer.style.backgroundSize = bgSize;
      bgBlurLayer.style.backgroundPosition = "center center";
      bgBlurLayer.style.backgroundRepeat = "no-repeat";
      bgBlurLayer.style.backgroundAttachment = "fixed";
    }
  }
}
function nextSlide() {
  if (currentSlide < recommendedSupplements.length - 1) {
    goToSlide(currentSlide + 1);
  }
}

function prevSlide() {
  if (currentSlide > 0) {
    goToSlide(currentSlide - 1);
  }
}

function updateIndicator() {
  if (sliderIndicator) {
    sliderIndicator.textContent = `${currentSlide + 1} / ${
      recommendedSupplements.length
    }`;
  }
}

function updateArrows() {
  sliderPrev.disabled = currentSlide === 0;
  sliderNext.disabled = currentSlide === recommendedSupplements.length - 1;
}

// ====================================
// 슬라이더 이벤트 리스너
// ====================================
sliderPrev.addEventListener("click", prevSlide);
sliderNext.addEventListener("click", nextSlide);

// 키보드 네비게이션
document.addEventListener("keydown", (e) => {
  if (productsScreen.classList.contains("active")) {
    if (e.key === "ArrowLeft") prevSlide();
    if (e.key === "ArrowRight") nextSlide();
  }
});

// 터치 스와이프 지원
let touchStartX = 0;
let touchEndX = 0;

sliderTrack.addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

sliderTrack.addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
});

function handleSwipe() {
  if (touchEndX < touchStartX - 50) {
    nextSlide();
  }
  if (touchEndX > touchStartX + 50) {
    prevSlide();
  }
}

// ====================================
// 상세 페이지 표시
// ====================================
// ====================================
// ìƒì„¸ íŽ˜ì´ì§€ í'œì‹œ
// ====================================
function showDetail(supplement) {
  // ⭐ 해당 영양제의 상세 이미지 가져오기
  const detailImage =
    supplementDetailImages[supplement.id] || supplementImages[supplement.id];

  detailContent.innerHTML = `
        <h1 class="detail-title">${supplement.name}</h1>
        
        <div class="detail-description">
            ${supplement.description}
        </div>
        
        <div class="detail-section">
            <h3 class="detail-section-title">권장량</h3>
            <p class="detail-section-content">${supplement.dosage}</p>
        </div>
        
        <div class="detail-section">
            <h3 class="detail-section-title">부작용­</h3>
            <p class="detail-section-content">${supplement.precautions}</p>
        </div>
        
        <div class="detail-section">
            <h3 class="detail-section-title">관련 식품</h3>
            <p class="detail-section-content">${supplement.richFoods}</p>
        </div>
    `;

  // ⭐ 이미지를 detail-content 밖에 별도로 추가
  const detailScreen = document.getElementById("detail-screen");

  // 기존 이미지가 있으면 제거
  const existingImage = detailScreen.querySelector(".detail-image-container");
  if (existingImage) {
    existingImage.remove();
  }

  // 새 이미지 컨테이너 생성
  const imageContainer = document.createElement("div");
  imageContainer.className = "detail-image-container";
  imageContainer.innerHTML = `
    <img src="${detailImage}" alt="${supplement.name}" class="detail-product-image" />
  `;

  // detail-screen의 container 안에 추가
  const container = detailScreen.querySelector(".container");
  container.insertBefore(imageContainer, detailContent);

  // ë°°ê²½ ì´ë¯¸ì§€ ì ìš© (ì¶"ì²œ ì˜ì–'ì œì™€ ë™ì¼í•œ ë°°ê²½)
  if (supplement && supplementBackgrounds[supplement.id]) {
    const background = supplementBackgrounds[supplement.id];
    document.body.style.background = background;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.animation = "none";
  }

  // í™"ë©´ ì „í™˜
  productsScreen.classList.remove("active");
  detailScreen.classList.add("active");

  // ìŠ¤í¬ë¡¤ ë§¨ ìœ„ë¡œ
  window.scrollTo(0, 0);
}
// ====================================
// 뒤로가기 버튼
// ====================================
backToHomeBtn.addEventListener("click", () => {
  productsScreen.classList.remove("active");
  homeScreen.classList.add("active");

  // 선택 초기화
  selectedSymptoms = [];
  symptomCards.forEach((card) => card.classList.remove("selected"));
  localStorage.removeItem("selectedSymptoms");

  // 슬라이더 초기화
  currentSlide = 0;

  // 원래 배경으로 복원
  restoreDefaultBackground();
});

backToProductsBtn.addEventListener("click", () => {
  detailScreen.classList.remove("active");
  productsScreen.classList.add("active");

  // 슬라이더 배경 복원
  updateBackground();

  window.scrollTo(0, 0);
});

// ====================================
// 기본 배경 복원
// ====================================
function restoreDefaultBackground() {
  document.body.style.background = `linear-gradient(135deg, 
        #FFE66D 0%, 
        #A8E6CF 25%, 
        #FF8B94 50%, 
        #FFD97D 75%, 
        #A8DCD1 100%)`;
  document.body.style.backgroundSize = "400% 400%";
  document.body.style.backgroundPosition = "center";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundAttachment = "scroll";
  document.body.style.animation = "gradientShift 15s ease infinite";
}

// ====================================
// 페이지 로드 시 저장된 데이터 복원
// ====================================
window.addEventListener("load", () => {
  const saved = localStorage.getItem("selectedSymptoms");
  if (saved) {
    selectedSymptoms = JSON.parse(saved);
    symptomCards.forEach((card) => {
      const symptom = card.getAttribute("data-symptom");
      if (selectedSymptoms.includes(symptom)) {
        card.classList.add("selected");
      }
    });
  }
});
// ... (기존 코드)

// ====================================
// 페이지 로드 시 저장된 데이터 복원 및 블러 효과 적용
// ====================================
window.addEventListener("load", () => {
  const saved = localStorage.getItem("selectedSymptoms");
  if (saved) {
    selectedSymptoms = JSON.parse(saved);
    symptomCards.forEach((card) => {
      const symptom = card.getAttribute("data-symptom");
      if (selectedSymptoms.includes(symptom)) {
        card.classList.add("selected");
      }
    });
  }

  // ⭐⭐ 새로 추가할 코드: 함수 호출 ⭐⭐
  applyBlurEffects();
});
