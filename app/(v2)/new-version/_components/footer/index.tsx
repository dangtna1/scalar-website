import { cva, VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import FooterColumn from "./components/footer-column";
import { FooterContent } from "@/lib/constants/footer";
import { FooterWithLogo } from "./components/footer-with-logo";

/* ---------------------------------------------------------------------------------------------------------------------
 * Component: Footer
 * ------------------------------------------------------------------------------------------------------------------ */

const footerVariants = cva(
  "bg-transparent flex flex-col gap-3 xl:gap-[24px] h-full px-[18px] xl:px-[115px] py-[32px] xl:py-[117px]",
);

type FooterVariantProps = VariantProps<typeof footerVariants>;

type FooterProps = FooterVariantProps & Omit<HTMLAttributes<HTMLDivElement>, keyof FooterVariantProps>;

export function Footer({
  className,
  children,
  ...props
}: FooterProps): React.JSX.Element {
  return (
    <div
      className={footerVariants({ className })}
      {...props}
    >
      <div className={cn('flex flex-col gap-6 xl:flex-row xl:gap-[161px] xl:justify-between')}>
        {/* Footer column with Logo */}
        <FooterWithLogo />

        {/* Footer column */}
        <div className={cn("w-full grid grid-cols-2 md:grid-cols-4 pb-3 xl:pb-0 border-b border-neutral-8 xl:border-none xl:flex gap-x-2 gap-y-3 xl:justify-between")}>
          {FooterContent.map((column: FooterContent, index: number) =>
            <FooterColumn column={column} index={index} />
          )}
        </div>
      </div>

      {/* Footer copyright */}
      <div className={cn("w-full flex gap-1 text-neutral-7 text-xs md:text-[13px] font-bold xl:text-[22px] xl:leading-[33px]")}>
        Copyright ©
        <span className="text-white">Scalar</span>
        | Designed by Scalar
      </div>
    </div>
  );
}
