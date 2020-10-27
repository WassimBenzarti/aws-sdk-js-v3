import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DescribeSnapshotCopyGrantsMessage, SnapshotCopyGrantMessage } from "../models/models_0";
import {
  deserializeAws_queryDescribeSnapshotCopyGrantsCommand,
  serializeAws_queryDescribeSnapshotCopyGrantsCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type DescribeSnapshotCopyGrantsCommandInput = DescribeSnapshotCopyGrantsMessage;
export type DescribeSnapshotCopyGrantsCommandOutput = SnapshotCopyGrantMessage & __MetadataBearer;

export class DescribeSnapshotCopyGrantsCommand extends $Command<
  DescribeSnapshotCopyGrantsCommandInput,
  DescribeSnapshotCopyGrantsCommandOutput,
  RedshiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeSnapshotCopyGrantsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeSnapshotCopyGrantsCommandInput, DescribeSnapshotCopyGrantsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName: "RedshiftClient",
      commandName: "DescribeSnapshotCopyGrantsCommand",
      inputFilterSensitiveLog: DescribeSnapshotCopyGrantsMessage.filterSensitiveLog,
      outputFilterSensitiveLog: SnapshotCopyGrantMessage.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeSnapshotCopyGrantsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeSnapshotCopyGrantsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeSnapshotCopyGrantsCommandOutput> {
    return deserializeAws_queryDescribeSnapshotCopyGrantsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
