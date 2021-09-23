import tw, { styled } from 'twin.macro';

export const CardWrapper = styled.div`
  ${tw`
    w-full
    flex
    flex-col 
    items-center
  `}
`;

export const ImageWrapper = styled.div`
  ${tw`
    relative
    rounded-full 
    overflow-hidden
    mb-5
  `}

  width: 200px;
  height: 200px;
`;

export const CardName = styled.p`
  ${tw`
    font-poppins
    text-2xl
    font-semibold
    mb-3
  `}
`;

export const CardDescription = styled.p`
  ${tw`
    text-center
    font-sans-pro
    sm:px-10
    mb-5
  `}
`;

export const SocialLinks = styled.div`
  ${tw`
    flex
    text-center
    text-2xl
  `}
`;
